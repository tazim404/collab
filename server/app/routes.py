from app import app,db
from flask import request,jsonify,make_response
from app.models import Users,Rooms
from werkzeug.security import generate_password_hash,check_password_hash
from functools import wraps
import uuid
import random
import jwt
avatars = {
    'male': [
        'https://semantic-ui.com/images/avatar2/small/mark.png',
        'https://semantic-ui.com/images/avatar2/small/matthew.png',
        'https://semantic-ui.com/images/avatar2/small/patrick.png',
        'https://semantic-ui.com/images/avatar2/small/elyse.png'


    ],
    'female': [
        'https://semantic-ui.com/images/avatar2/small/kristy.png',
        'https://semantic-ui.com/images/avatar2/small/lena.png',
        'https://semantic-ui.com/images/avatar2/small/lindsay.png',
        'https://semantic-ui.com/images/avatar2/small/molly.png',
        'https://semantic-ui.com/images/avatar2/small/rachel.png'

    ]
}


# Token checker
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):

        token=None
        if 'access-token' in request.headers:
            token=request.headers['access-token']
        if not token:
            return jsonify({'message':'token is missing'}),401
        try:
            data=jwt.decode(token,app.config['SECRET_KEY'],algorithms='sha256')
            current_user=Users.query.filter_by(public_id=data['public_id']).first()
        except:
            return jsonify({'message':"TOken is invalid"}),403
        return f(current_user,*args, **kwargs)
    return decorated


# Singup Route
@app.route('/singup')
def singup():
    data=request.get_json()
    try:
        password_hash=generate_password_hash(data['password'],method='sha256')
        if data['gender']=='male':
            male=True
            avatar_link=random.choice(avatars['male'])
        else:
            male=False
            avatar_link=random.choice(avatars['female'])
        entry=Users(public_id=uuid.uuid4().hex,username=data['username'],email=data ['email'],password=password_hash,male=male,avatar_link=avatar_link)
        db.session.add(entry)
        db.session.commit()
        return jsonify({'message':"User Created"})
    except Exception:
        return jsonify({"Problem in creating user,I think you should try diffrent username"})
    
@app.route('/login')
def login():
    data=request.get_json()
    if not data or not data['username'] or not data['password']:
        return make_response("Could not verify",401,{'WWW-Authenticate':'Basic Realam="Login Required"'})
    user=Users.query.filter_by(username=data['useranme']).first()
    if not user:
        return jsonify({'message':"No user found"})
    if check_password_hash(user.password,data['password']):
        token=jwt.encode({'user_id':user.public_id},app.config['SECRET_KEY'],algorithm='sha256')
        return jsonify({'token':token})
    else:
        return jsonify({'message':"Wrong credentials"})


@app.route('/create')
@token_required
def create_room(current_user):
    data=request.get_json()
    user=Users.query.filter_by(public_id=current_user.public_id).first()
    # Create a room
    # room=Rooms(room_name=data['room_name'],video_link=data['video_link'],room_id='')

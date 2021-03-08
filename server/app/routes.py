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
@app.route('/singup',methods=["POST"])
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
    
@app.route('/login',methods=["POST"])
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


@app.route('/create',methods=["POST"])
@token_required
def create_room(current_user):
    # Accept room_name,video_link
    data=request.get_json()
    user=Users.query.filter_by(public_id=current_user.public_id).first()
    unique_id=uuid.uuid4().hex[0:6]
    # Create a room
    room=Rooms(room_name=data['room_name'],video_link=data['video_link'],room_id=unique_id,created_by=current_user.public_id)
    db.session.add(room)
    db.session.commit()
    return jsonify({"message":"New room craeted"})

@app.route('/delete',methods=["POST"])
@token_required
def delete_room(current_user):
    # Accepts:room_id,user_id
    try:
        data=request.get_json()
        room=Rooms.query.filter_by(room_id=data['room_id']).first()
        if room.created_by==current_user.public_id:
            db.session.delete(room)
            db.session.commit()
            return jsonify({'message':"Deleted the room"})
        else:
            return jsonify({'message':"YOu are not the creator of this room so you cant do this"})
    except:
        return jsonify({'message':'Problem in performing this opration'})


@app.route('/admin',methods=["GET"])
@token_required
def admin(current_user):
    data={}
    data['public_id']=current_user.public_id
    data['username']=current_user.useranme
    data['email']=current_user.email
    data['avatar_link']=current_user.avatar_link
    if current_user.male ==True:
        data['gender']='Male'
    else:
        data['gender']='Female'
    data['message']="We dont keep anything secret from user that's why give every data about you."
    return jsonify({'message':data})

@app.route('/<room_id>')
def get_room_info(room_id):
    room_data=Rooms.query.filter_by(room_id=room_id).first()
    data={}
    data['room_name']=room_data.room_name
    data['video_link']=room_data.video_link
    data['room_id']=room_data.room_id
    data['created_by']=room_data.created_by
    return jsonify({"message":data})
    
from app import db


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True, index=True)
    username = db.Column(db.String(50), unique=True,
                         nullable=False, index=True)
    email = db.Column(db.String(80), unique=True, nullable=False, index=True)
    password = db.Column(db.String(128), nullable=False)
    male = db.Column(db.Boolean, nullable=False)
    avatar_link = db.Column(db.String(100), nullable=True)
    room = db.relationship('Rooms', backref='owner', lazy='dynamic')


class Rooms(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_name = db.Column(db.String(50), unique=True)
    video_link = db.Column(db.String(100), unique=False)
    room_id = db.Column(db.String(50))
    number_of_users = db.Column(db.Integer, nullable=True)
    created_by = db.Column(db.String(50), db.ForeignKey('users.public_id'))


# class UsersRooms(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     room_id =

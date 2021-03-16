import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()
print(os.environ.get('DATABASE_URI'))
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')


# Socket
socket = SocketIO(app, cors_allowed_origins="*")
cors = CORS(app)
db = SQLAlchemy(app)
from app.routes import *
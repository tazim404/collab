from app import app
from app import socket
from dotenv import load_dotenv
import os
if __name__ == '__main__':
    socket.run(app,debug=True)

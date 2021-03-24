from app import app
from app import socket
from dotenv import load_dotenv
import os
load_dotenv()
if __name__ == '__main__':
    if os.environ.get('ENVIORNMENT')=="DEV":
        socket.run(app,debug=True)
    else:
        socket.run(app)

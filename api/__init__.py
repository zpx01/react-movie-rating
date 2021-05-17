from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from os import path

db = SQLAlchemy()
DB_NAME = 'database.db'
def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'sdfghjkloiuytdxcv'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

    db.init_app(app)

    from .views import main
    from .models import Movie
    app.register_blueprint(main)

    create_database(app)

    return app

def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print("Created Database!")
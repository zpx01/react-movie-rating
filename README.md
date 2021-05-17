# Movie Rating App

This web application was built using a Python Flask API for the backend and React.js for the frontend. This project utilized some basic CSS from TailWindCSS and components from React Semantic-UI.

## Usage

To use the app, first clone the repository. Then, run the following command in terminal to install Flask and SQLAlchemy:

`pip install -r requirements.txt`

*Suggestion: Start a new virtual environment in Python before installing any dependencies.*

Run the following command to start your Flask server:

`flask run`

*There may be an issue regarding your FLASK_APP environment variable. If you run into this issue, then set the FLASK_APP environment variable equal to "api" (without the quotations).*

After starting your Flask server, open a new terminal window and run the following to run the React development server:

`npm start`

To create a production build of the project, run the following command:

`npm build`

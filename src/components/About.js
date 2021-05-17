import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div className="container">
      <h1 align="center">Movie Rating App</h1>
      <h3 align="center">Version 1.0.0</h3>
      <br />
      <p align="center">Python Flask + React.js project developed by Zeeshan Patel.</p>
      <p align="center">
        This movie rating app uses a Flask API backend to store your movie ratings. You can add movie ratings by inputting the name of a movie and its rating out of 5 stars. Some components from Semantic UI were used for the frontend. 
      </p>
      <br />
      <div align="center">
        <Link to="/">
          <button className="btn-about">Go Back</button>
        </Link>
      </div>
    </div>
  );
};


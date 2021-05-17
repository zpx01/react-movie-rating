import "./App.css";
import React, { useEffect, useState } from "react";
import { Movies } from "./components/Movies";
import { MovieForm } from "./components/MovieForm";
import { Container, Header } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./components/About";
import { Footer } from "./components/Footer"

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies").then((response) =>
      response.json().then((data) => {
        setMovies(data.movies);
      })
    );
  }, []);

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Container style={{ marginTop: 40 }}>
                <Header as="h1">Movie Rating App</Header>
                <MovieForm
                  onNewMovie={(movie) =>
                    setMovies((currentMovies) => [movie, ...currentMovies])
                  }
                />
                <br />
                <Movies movies={movies} />
              </Container>
              <Footer />
            </>
          )}
        ></Route>
        <Route path="/about" exact component={About} />
      </div>
    </Router>
  );
}

export default App;

import { Header, List, Rating } from "semantic-ui-react";

export const Movies = ({ movies }) => {
  return (
    <div className="container-list">
      <h2>Ratings List</h2>
      <hr />
      <br />
      <List>
        {movies.map((movie) => {
          return (
            <List.Item key={movie.title}>
              <Header>{movie.title}</Header>
              <Rating rating={movie.rating} maxRating={5} disabled></Rating>
              <br />
              <br />
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

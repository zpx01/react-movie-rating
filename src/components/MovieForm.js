import React, { useState } from "react";
import { Form, Input, Rating } from "semantic-ui-react";

export const MovieForm = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);

  return (
    <div className="container-form">
      <h3>Enter your movie rating here:</h3>
      <br />
      <Form>
        <Form.Field>
          <Input
            placeholder="Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <Rating
            icon="star"
            rating={rating}
            maxRating={5}
            onRate={(_, data) => {
              setRating(data.rating);
            }}
          ></Rating>
        </Form.Field>
        <Form.Field>
          <button
            className="btn-submit"
            onClick={async () => {
              const movie = { title, rating };
              const response = await fetch("/add_movie", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(movie),
              });
              if (response.ok) {
                onNewMovie(movie);
                setTitle("");
                setRating(1);
              }
            }}
          >
            Submit
          </button>
        </Form.Field>
      </Form>
    </div>
  );
};

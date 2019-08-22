import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ButtonContainer } from "../styled-components/Button";
import axios from "axios";

const MovieUpdate = props => {
  const [update, setUpdate] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: ""
  });
  const changeHandler = event => {
    event.preventDefault();
    setUpdate({ ...update, [event.target.name]: event.target.value });
  };

  const updateMovie = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies/${props.match.params.id}`, update)
      .catch(err => console.log(err.response));
    props.history.push(`/`);
  };

  return (
    <div className="updateModal">
      <form className="update-modal" onSubmit={event => updateMovie(event)}>
        <h1 className="updateTitle">Update Movie !</h1>
        <p className="updateInputs">
          <label>
            Title:
            <input
              className="input-modal"
              type="text"
              name="title"
              onChange={changeHandler}
              value={update.title}
            />
          </label>
        </p>

        <p className="updateInputs">
          <label>
            Director:
            <input
              className="input-modal"
              type="director"
              name="director"
              onChange={changeHandler}
              value={update.director}
            />
          </label>
        </p>

        <p className="updateInputs">
          <label>
            Metascore:
            <input
              className="input-modal"
              type="metascore"
              name="metascore"
              onChange={changeHandler}
              value={update.metascore}
            />
          </label>
        </p>

        <p className="updateInputs">
          <label>
            Stars:
            <input
              className="input-modal"
              type="stars"
              name="stars"
              onChange={changeHandler}
              value={update.stars}
            />
          </label>
        </p>

        <ButtonContainer
          className="button-modal"
          onClick={event => updateMovie(event)}
        >
          Update!
        </ButtonContainer>
      </form>
    </div>
  );
};

export default withRouter(MovieUpdate);

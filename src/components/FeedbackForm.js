import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  // This hook handles the state of the user review textbox.
  const [input, setInput] = useState("");

  //This hook handles the Button component's state. Will it be disabled or enabled?
  const [btnDisable, setBtnDisabled] = useState(true);

  //This hook handles the rating number's state.
  const [rating, setRating] = useState(10);

  //This hook handles the state of the validation message that is displayed at the bottom of the card file!
  const [message, setMessage] = useState("");

  //This handleInputChange function will take the text of the input field and set it to state! Validation also!
  const handleInputChange = (e) => {
    /*Checks to see if the text review box is empty. If it's empty there shouldn't be a
     message at the bottom. This is form validation! */
    if (input === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (input !== "" && input.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
    setInput(e.target.value);
  };

  const handleSubmit = (event) => {
    //This prevents the default behavior of submitting to the actual file.
    event.preventDefault();
    //Check again for form validation
    if (input.trim().length > 10) {
      const newFeedback = {
        text: input,
        rating: rating,
      };
      //console.log("the new feedback object", newFeedback);
      handleAdd(newFeedback);
      setInput("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          {/* UseState Hook can set a piece of state for the form by using the onChange prop */}
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Write a review..."
            value={input}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisable}>
            Send
          </Button>
        </div>
        {/* This conditional statement below will show a message if there is one! */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;

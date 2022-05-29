import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  //This code adds feedback after user hits the send button
  const addFeedback = (newFeedback) => {
    //UUID creates a unique identifier for the newFeedback object.
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //This code deletes the feedback after a confirmation window.
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedbackItems={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

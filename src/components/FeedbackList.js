import React from "react";
import FeedbackItem from "./FeedbackItem";

//FeedbackList component with 1 prop of feedbackItems
function FeedbackList({ feedbackItems, handleDelete }) {
  //if no props or props equels zero
  if (!feedbackItems || feedbackItems === 0) {
    //return this paragraph
    return <p>No feedback yet</p>;
  }
  return (
    //else map out the props
    <div className="feedback-list">
      {feedbackItems.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;

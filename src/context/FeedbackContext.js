import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//This function sets the context and provides a way to pass data through
// the component tree without having to pass props down manually at every level.
// A good use case for context is having different themes such as dark/light mode for the app.

// 1. Start by creating a variable and using the create context hook.
const FeedbackContext = createContext();

// This is the default function that will go inside the useContext(FeebackProvider) hook!
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is item 2",
      rating: 10,
    },
    {
      id: 3,
      text: "This is item 3",
      rating: 10,
    },
  ]);


  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  //This code deletes the feedback after a confirmation window.
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //This code adds feedback after user hits the send button
  const addFeedback = (newFeedback) => {
    //UUID creates a unique identifier for the newFeedback object.
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //This code allows user to edit feedback on the FeebackItem component.
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    // This is how I create the provider component for the FeedbackContext component.
    <FeedbackContext.Provider
      // The values below can be extracted as an object to be used where ever I use the useContext hook.
      value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

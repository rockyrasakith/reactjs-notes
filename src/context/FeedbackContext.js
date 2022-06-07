import { createContext, useState, useEffect } from "react";
//This function sets the context and provides a way to pass data through
// the component tree without having to pass props down manually at every level.
// A good use case for context is having different themes such as dark/light mode for the app.

// 1. Start by creating a variable and using the create context hook.
const FeedbackContext = createContext();

// This is the default function that will go inside the useContext(FeebackProvider) hook!
export const FeedbackProvider = ({ children }) => {
  //Define a state for loading indicator. Good practice.
  const [isLoading, setIsLoading] = useState(true);
  //UseState hook for the server data
  const [feedback, setFeedback] = useState([]);
  //UseState hook for the feedback edit icon.
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  /* useEffect hook will run as soon the the component mounts. 
  Think of it as an automatic event such as a motion alarm 
  being triggered as soon as someone walks into the room. */
  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      //uses a proxy that was defined on the package.json file
      "/feedback?sort=_id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Update the feedback
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  //This code deletes the feedback after a confirmation window.
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //This code adds feedback after user hits the send button
  const addFeedback = async (newFeedback) => {
    //Uses async function with await fetch to grab data from the database.
    const response = await fetch("/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    // The data should be passed into the useState hook.
    setFeedback([data, ...feedback]);
  };

  //This code allows user to edit feedback on the FeebackItem component.
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    // This is how I create the provider component for the FeedbackContext component.
    <FeedbackContext.Provider
      // The values below can be extracted as an object to be used where ever I use the useContext hook.
      value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        isLoading: isLoading,
        addFeedback: addFeedback,
        editFeedback: editFeedback,
        feedbackEdit: feedbackEdit,
        updateFeedback: updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

//FeedbackList component with 1 prop of feedbackItems
function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  //if no props or props equels zero
  if (!isLoading && (!feedback || feedback.length === 0)) {
    //return this paragraph
    return <p>No feedback yet</p>;
  }

  //Return Statement with Framer-Motion Library
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {/* else map out the props */}
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opactiy: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;

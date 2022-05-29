import { FaTimes } from "react-icons/fa";

import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    // Card reverse prop sets the color to dark/light mode using a truthy statement in the Card component
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutComponentIcon from "./components/AboutComponentIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

import { Link } from "react-router-dom";

function App() {
  return (
    //Feedback provider wraps the entire component tree.
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        {/* Links are made with the Link Component */}
        <Link to="/about">
          <AboutComponentIcon />
        </Link>
      </div>
    </FeedbackProvider>
  );
}

export default App;

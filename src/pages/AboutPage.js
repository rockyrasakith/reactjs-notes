import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";


function AboutPage() {
  return (
    <div className="about">
      <Card reverse="reverse">
        <h1>About</h1>
        <p>This is a react app to leave feedback for a product or service.</p>
        <p>Version 1.0</p>
        <p>
          <Link to="/">Go Back Home</Link>
        </p>
      </Card>
    </div>
  );
}

export default AboutPage;

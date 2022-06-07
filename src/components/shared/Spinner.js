import React from "react";
import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      //The margin auto makes the image in the middle, display block allows margin auto to work.
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;

import React from "react";
import PropTypes from 'prop-types'


//The props can be destructed. Look at the function Header() example below. It's in the objects bracket.
function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

//This code below is the default props method, in case I don't pass any props into the component.
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95"
};

//This code is to define data structure type of each prop.
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header;

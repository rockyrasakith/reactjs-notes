import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"

// Import the Browser Router, Routes, Route Components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import each Page as a component to render. 
import AboutPage from "./pages/AboutPage";

//Follow the Example below to create the routes!
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

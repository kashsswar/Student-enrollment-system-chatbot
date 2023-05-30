import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Initial content */}
      <h1>Welcome to Student Info System!</h1>

      {/* Enroll Now button */}
      <div className="button-container">
        <Link to="/chatbot">Enroll Now!</Link>
      </div>
    </div>
  );
};

export default HomePage;

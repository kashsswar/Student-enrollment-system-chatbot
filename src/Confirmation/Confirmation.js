import React from 'react';
import { useLocation } from 'react-router-dom';
import './confimation.css';

const Confirmation = () => {
  const location = useLocation();
  const { name, age } = location.state || {};

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <p className="confirmation-message">
          Your name {name} aged {age} has been added to the Student System. You may now exit.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;

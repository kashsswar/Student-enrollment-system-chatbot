import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nameEntered, setNameEntered] = useState(false);
  const [ageEntered, setAgeEntered] = useState(false);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'B', text: 'Hello, Welcome to the Student Info System!' },
      ]);
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'U', text: 'Got it!' },
      { sender: 'B', text: 'Enter your Name' },
    ]);
    setShowButton(false);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'U', text: name },
        { sender: 'B', text: 'Enter your Age' },
      ]);
      setNameEntered(true);
    }
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    if (age !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'U', text: age },
        { sender: 'B', text: 'Thank you. In 5 seconds, the chatbot will exit.' },
      ]);
      setAgeEntered(true);
      startCountdown();
    }
  };

  const startCountdown = () => {
    let count = 5;
    const countdownInterval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(countdownInterval);
        navigate('/confirmation', { state: { name, age } });
      }
    }, 1000);
  };

  const ageOptions = [];
  for (let i = 18; i <= 40; i++) {
    ageOptions.push(<option value={i} key={i}>{i}</option>);
  }

  return (
    <div className="chatbot-container">
      <div className="chat-container">
        {/* Display conversation */}
        {messages.map((message, index) => (
          <p key={index} className={`chat-message ${message.sender}`}>
            {message.text}
          </p>
        ))}
      </div>

      <div className="user-input">
        {/* User input */}
        {showButton && (
          <button onClick={handleButtonClick}>Got it!</button>
        )}
        {!showButton && !nameEntered && (
          <form onSubmit={handleNameSubmit}>
            <label>
              User:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <button type="submit">Enter</button>
          </form>
        )}
        {nameEntered && !ageEntered && (
          <form onSubmit={handleAgeSubmit}>
            <label>
              User:
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="">Select Age</option>
                {ageOptions}
              </select>
            </label>
            <button type="submit">Enter</button>
          </form>
        )}
      </div>

      {ageEntered && (
        <div className="countdown-container">
          {countdown > 0 && (
            <p className="countdown">Countdown: {countdown}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;

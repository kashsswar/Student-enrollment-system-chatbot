import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Chatbot from './Chatbot/Chatbot';
import Confirmation from './Confirmation/Confirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;


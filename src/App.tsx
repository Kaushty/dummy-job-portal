import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './containers';
import { User } from './models';

function App() {
  const [appData, setAppData] = useState<User[]>([]);
  const [shortlistedData, setShortlistedData] = useState<User[]>([]);
  const [rejectedData, setrejectedData] = useState<User[]>([]);

  useEffect(() => {}, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/shortlist" element={<Home />} />
        <Route path="/reject" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

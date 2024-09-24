import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import Profile from './pages/Profile';

import NavigationBar from './components/Navbar';

const AppRoutes = () => {
  return (
    <Router>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contact" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;

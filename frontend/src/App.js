import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';


const App = () => {


  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


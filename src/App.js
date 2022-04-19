import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import MyNavBar from './MyNavBar'
import ToDoList from './components/ToDoList';
import CreateNewToDo from './components/CreateNewToDo';
import About from './components/About';

function App() {
  return (
    <div>
      <MyNavBar></MyNavBar>

      <Routes>
        <Route path="/list" element={<ToDoList />} />
        <Route path="/new" element={<CreateNewToDo />} />
        <Route
          path="*"
          element={<Navigate to="/list" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;

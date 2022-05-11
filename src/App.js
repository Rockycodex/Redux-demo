import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import MyNavBar from './MyNavBar'
import ToDoList from './components/ToDoList';
import CreateNewToDo from './components/CreateNewToDo';
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <MyNavBar></MyNavBar>

      <Routes>
        <Route path="/list" element={<ToDoList />} />
        <Route path="/new" element={<CreateNewToDo />} />
        <Route
          path="*"
          element={<Navigate to="/list" replace />}
        />
      </Routes>
    </Provider>
  );
}

export default App;

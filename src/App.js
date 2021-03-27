import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContextProvider from './contexts/TodosContext';

const App = () => {

  return (
    <div className="App">
      <Container >
        <h1 className="mt-4">Todo list</h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList/>
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;

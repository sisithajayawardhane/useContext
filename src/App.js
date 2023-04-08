import React from 'react';
import './App.css';
import MyProvider from './MyProvider';
import MyInput from './MyInput';
import MyDisplay from './MyDisplay';

function App() {
  return (
    <MyProvider>
      <MyInput />
      <MyDisplay />
    </MyProvider>
  );
}

export default App;
import React from 'react';
import MyContext from './MyContext';
import { useMyState } from './MyContext';

function MyProvider(props) {
  const { myState, handleInputChange } = useMyState(); // Use the custom hook to manage state

  return (
    <MyContext.Provider value={{ myState, handleInputChange }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyProvider;

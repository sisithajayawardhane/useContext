import { createContext, useState } from 'react';

// Create a context object
const MyContext = createContext();

// Create a custom hook to manage state
export function useMyState() {
  const [myState, setMyState] = useState('');

  function handleInputChange(event) {
    setMyState(event.target.value);
  }

  return {
    myState,
    handleInputChange
  };
}

export default MyContext;

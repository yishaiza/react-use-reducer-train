import { useEffect, useReducer } from "react";
import reducer, { initialState } from "./state/reducer";
import { newMessage } from "./state/actions";

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    setInterval(
      () => dispatch(newMessage('foo')),
      3000)
  }, []);
  console.log({ state }) // eslint-disable-line


  return (
    <div>
      <h2>Reaction</h2>
    </div>
  );
}

export default App;

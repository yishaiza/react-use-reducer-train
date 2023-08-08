import { useReducer } from "react";
import reducer, { initialState } from "./state/reducer";

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log({ state }) // eslint-disable-line


  return (
    <div>
      <h2>Reaction</h2>
    </div>
  );
}

export default App;

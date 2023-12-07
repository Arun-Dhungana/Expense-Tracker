import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incr, decr } from "./store/index.js";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const INCR = () => {
    dispatch(incr);
  };
  const DECR = () => {
    dispatch(decr);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={INCR}>Increment</button>
      <button onClick={DECR}>Decrement</button>
    </div>
  );
}

export default App;

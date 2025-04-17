import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.Counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count : {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
};

export default Counter;

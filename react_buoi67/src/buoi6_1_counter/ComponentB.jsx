import { useDispatch } from 'react-redux';
import { increment, decrement, resetCount } from './counterSlice';

export function ComponentB() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid green', margin: '10px 0' }}>
      <h3>Component B - Control Count</h3>
      <button onClick={() => dispatch(increment())} style={{ marginRight: '10px', padding: '10px 20px' }}>
        Increment (+)
      </button>
      <button onClick={() => dispatch(decrement())} style={{ marginRight: '10px', padding: '10px 20px' }}>
        Decrement (-)
      </button>
      <button onClick={() => dispatch(resetCount())} style={{ padding: '10px 20px' }}>
        Reset
      </button>
    </div>
  );
}

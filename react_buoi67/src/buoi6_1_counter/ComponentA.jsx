import { useSelector } from 'react-redux';

export function ComponentA() {
  const count = useSelector((state) => state.counter.count);

  return (
    <div style={{ padding: '20px', border: '1px solid blue', margin: '10px 0' }}>
      <h3>Component A - Display Count</h3>
      <p>Current Count: <strong>{count}</strong></p>
    </div>
  );
}

import { Provider } from 'react-redux';
import { store1 } from './store';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';

export function Buoi6_1() {
  return (
    <Provider store={store1}>
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h1>🎯 Exercise 1: Counter Global</h1>
        <p>Goal: Understand simple Global State</p>
        <ComponentA />
        <ComponentB />
      </div>
    </Provider>
  );
}

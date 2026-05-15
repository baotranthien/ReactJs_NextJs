import { Provider } from 'react-redux';
import { store4 } from './store';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export function Buoi6_4() {
  return (
    <Provider store={store4}>
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h1>📋 Exercise 4: Todo List Global</h1>
        <p>Goal: Manage list state (Add/Delete/Edit)</p>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

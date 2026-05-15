import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const todos = useSelector((state) => state.todos.items);

  return (
    <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <h3>📝 Todo List ({todos.length})</h3>
      {todos.length === 0 ? (
        <p style={{ color: '#888' }}>No todos yet. Add one!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}

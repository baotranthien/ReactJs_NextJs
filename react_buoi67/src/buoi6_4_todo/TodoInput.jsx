import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export function TodoInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <h3>✍️ Add Todo</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Enter a new todo..."
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ddd',
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

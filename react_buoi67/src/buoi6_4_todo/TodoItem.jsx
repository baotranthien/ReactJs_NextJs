import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, toggleTodo } from './todoSlice';

export function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: todo.id, text: editText }));
      setIsEditing(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        backgroundColor: todo.completed ? '#e8f5e9' : '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '8px',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        style={{ marginRight: '10px', cursor: 'pointer' }}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSave()}
          style={{
            flex: 1,
            padding: '8px',
            fontSize: '14px',
            border: '1px solid #007bff',
            borderRadius: '4px',
            marginRight: '10px',
          }}
        />
      ) : (
        <span style={{ flex: 1 }}>{todo.text}</span>
      )}

      <div style={{ display: 'flex', gap: '5px' }}>
        {isEditing ? (
          <button
            onClick={handleSave}
            style={{
              padding: '5px 10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ffc107',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            Edit
          </button>
        )}
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          style={{
            padding: '5px 10px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

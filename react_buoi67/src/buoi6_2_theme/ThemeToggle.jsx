import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';

export function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
      color: theme === 'light' ? '#000000' : '#ffffff',
      padding: '40px',
      borderRadius: '8px',
      minHeight: '300px',
      transition: 'all 0.3s ease',
    }}>
      <h2>Current Theme: <strong>{theme.toUpperCase()}</strong></h2>
      <p>The entire app changes color based on the theme setting.</p>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: theme === 'light' ? '#333' : '#fff',
          color: theme === 'light' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        🌙 Toggle Theme {theme === 'light' ? '(Dark Mode)' : '(Light Mode)'}
      </button>
      <p style={{ marginTop: '20px', fontSize: '14px' }}>
        💾 Theme is saved to localStorage and persists across page reloads.
      </p>
    </div>
  );
}

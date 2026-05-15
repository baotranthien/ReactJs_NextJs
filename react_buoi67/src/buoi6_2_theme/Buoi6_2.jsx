import { Provider, useSelector } from 'react-redux';
import { store2 } from './store';
import { ThemeToggle } from './ThemeToggle';

function ThemeContent() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#f5f5f5' : '#0d0d0d',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    }}>
      <h1>🌓 Exercise 2: Theme Toggle (Dark / Light)</h1>
      <p>Goal: Global State for UI</p>
      <ThemeToggle />
    </div>
  );
}

export function Buoi6_2() {
  return (
    <Provider store={store2}>
      <ThemeContent />
    </Provider>
  );
}

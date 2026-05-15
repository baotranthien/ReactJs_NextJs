import { Provider } from 'react-redux';
import { store9 } from './store';
import { LoginForm } from './LoginForm';
import { ProtectedData } from './ProtectedData';

export function Buoi6_9() {
  return (
    <Provider store={store9}>
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h1>🔑 Exercise 9: Auth + API + Token</h1>
        <p>Goal: Real-world auth flow</p>
        <LoginForm />
        <ProtectedData />
      </div>
    </Provider>
  );
}

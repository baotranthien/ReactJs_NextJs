import { Provider } from 'react-redux';
import { store3 } from './store';
import { AuthComponent } from './AuthComponent';
import { Header } from './Header';

export function Buoi6_3() {
  return (
    <Provider store={store3}>
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h1>🔐 Exercise 3: Auth giả lập (Login/Logout)</h1>
        <p>Goal: Manage user state</p>
        <Header />
        <AuthComponent />
      </div>
    </Provider>
  );
}

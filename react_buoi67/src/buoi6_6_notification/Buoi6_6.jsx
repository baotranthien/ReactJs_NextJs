import { Provider } from 'react-redux';
import { store6 } from './store';
import { NotificationCenter } from './NotificationCenter';
import { NotificationTriggers } from './NotificationTriggers';

export function Buoi6_6() {
  return (
    <Provider store={store6}>
      <NotificationCenter />
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h1>🔔 Exercise 6: Notification System</h1>
        <p>Goal: Global UI state</p>
        <NotificationTriggers />
      </div>
    </Provider>
  );
}

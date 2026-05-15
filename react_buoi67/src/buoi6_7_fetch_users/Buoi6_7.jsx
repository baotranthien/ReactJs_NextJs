import { Provider } from 'react-redux';
import { store7 } from './store';
import { UsersList } from './UsersList';

export function Buoi6_7() {
  return (
    <Provider store={store7}>
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h1>⬇️ Exercise 7: Fetch Users (Global Async)</h1>
        <p>Goal: Async + Global State (Loading Spinner, Error message, List user)</p>
        <UsersList />
      </div>
    </Provider>
  );
}

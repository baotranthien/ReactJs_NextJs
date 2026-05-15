import { useSelector } from 'react-redux';

export function Header() {
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '15px',
      borderRadius: '4px',
      marginBottom: '15px',
      border: '1px solid #ddd',
    }}>
      <h3>👤 User Info (Multiple Components)</h3>
      {isLoggedIn ? (
        <p>Logged in as: <strong>{user.email}</strong></p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}

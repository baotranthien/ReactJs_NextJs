import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, logout } from './authSlice';

export function AuthComponent() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { user, isLoggedIn, loading } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter email');
      return;
    }

    dispatch(loginStart());
    // Simulate API call
    setTimeout(() => {
      dispatch(loginSuccess({ email, id: Math.random() }));
    }, 1500);
  };

  const handleLogout = () => {
    dispatch(logout());
    setEmail('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '10px 20px',
              backgroundColor: loading ? '#ccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      ) : (
        <div>
          <h3>✅ Welcome, {user.email}!</h3>
          <p>User ID: {user.id}</p>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

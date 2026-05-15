import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithAPI, logout } from './authAPISlice';

export function LoginForm() {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password');
  const dispatch = useDispatch();
  const { user, token, isLoggedIn, loading, error } = useSelector((state) => state.authAPI);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithAPI({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px', marginBottom: '20px' }}>
      <h2>🔐 API Authentication</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
            <input
              type="email"
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

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {error && (
            <div
              style={{
                padding: '10px',
                backgroundColor: '#f8d7da',
                border: '1px solid #f5c6cb',
                borderRadius: '4px',
                color: '#721c24',
                marginBottom: '15px',
              }}
            >
              {error}
            </div>
          )}

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
              fontWeight: 'bold',
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      ) : (
        <div>
          <div
            style={{
              padding: '15px',
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '4px',
              marginBottom: '15px',
            }}
          >
            <h4 style={{ margin: '0 0 10px 0' }}>✅ Logged In Successfully</h4>
            <p style={{ margin: '5px 0' }}>
              <strong>User:</strong> {user.name} ({user.email})
            </p>
            <p style={{ margin: '5px 0' }}>
              <strong>Token:</strong> {token.substring(0, 20)}...
            </p>
          </div>

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
              fontWeight: 'bold',
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

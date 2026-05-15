import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from './authSlice';

export function AuthContext() {
  const [email, setEmail] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const handleLogin = () => {
    if (email.trim()) {
      dispatch(loginUser({ email, id: Math.random() }));
      setEmail('');
      setShowLogin(false);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div style={{ padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '4px', marginBottom: '20px' }}>
      {isLoggedIn ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '16px' }}>
            👤 Logged in as <strong>{user.email}</strong>
          </span>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 15px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '10px' }}>
            <strong>👤 Not logged in</strong>
          </div>
          {!showLogin ? (
            <button
              onClick={() => setShowLogin(true)}
              style={{
                padding: '8px 15px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          ) : (
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '8px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                }}
              />
              <button
                onClick={handleLogin}
                style={{
                  padding: '8px 15px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Login
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

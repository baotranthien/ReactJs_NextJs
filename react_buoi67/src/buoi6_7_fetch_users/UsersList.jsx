import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';

export function UsersList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <h2>👥 Users List</h2>

      {loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div
            style={{
              display: 'inline-block',
              width: '40px',
              height: '40px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #007bff',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <p>Loading users...</p>

          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {error && (
        <div
          style={{
            padding: '15px',
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '4px',
            color: '#721c24',
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
          {data.map((user) => (
            <div
              key={user.id}
              style={{
                padding: '15px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <h4 style={{ margin: '0 0 10px 0' }}>{user.name}</h4>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                <strong>Username:</strong> {user.username}
              </p>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                <strong>Email:</strong> {user.email}
              </p>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>
                <strong>Website:</strong> {user.website}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

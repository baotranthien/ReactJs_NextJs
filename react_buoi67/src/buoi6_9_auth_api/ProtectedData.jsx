import { useDispatch, useSelector } from 'react-redux';
import { fetchProtectedData } from './authAPISlice';

export function ProtectedData() {
  const dispatch = useDispatch();
  const { token, isLoggedIn, protectedData, dataLoading, error } = useSelector((state) => state.authAPI);

  const handleFetchData = () => {
    if (token) {
      dispatch(fetchProtectedData(token));
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <h2>🔒 Protected API Call</h2>

      {!isLoggedIn ? (
        <p style={{ color: '#888' }}>Please login first to access protected data</p>
      ) : (
        <>
          <p>Token: <code style={{ backgroundColor: '#e9ecef', padding: '2px 6px', borderRadius: '3px' }}>{token}</code></p>

          <button
            onClick={handleFetchData}
            disabled={dataLoading || !token}
            style={{
              padding: '10px 20px',
              backgroundColor: dataLoading ? '#ccc' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: dataLoading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            {dataLoading ? 'Loading...' : 'Fetch Protected Data (with token)'}
          </button>

          {error && (
            <div
              style={{
                padding: '15px',
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

          {protectedData.length > 0 && (
            <div>
              <h4>Retrieved Data:</h4>
              <ul style={{ paddingLeft: '20px' }}>
                {protectedData.map((item) => (
                  <li key={item.id} style={{ marginBottom: '10px' }}>
                    <strong>{item.title}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

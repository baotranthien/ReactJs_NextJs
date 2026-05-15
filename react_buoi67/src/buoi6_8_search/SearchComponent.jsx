import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, searchUsers } from './searchSlice';

export function SearchComponent() {
  const dispatch = useDispatch();
  const { query, results, loading, error } = useSelector((state) => state.search);
  const debounceTimer = useRef(null);

  const handleSearch = (value) => {
    dispatch(setQuery(value));

    // Clear previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new debounce timer - wait 800ms before making API call
    debounceTimer.current = setTimeout(() => {
      dispatch(searchUsers(value));
    }, 800);
  };

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <h2>🔍 Search Users (with Debounce)</h2>
      <p>API is called 800ms after you stop typing</p>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name (try: Leanne, Ervin, Clementine...)"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            boxSizing: 'border-box',
            marginBottom: '10px',
          }}
        />
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <span style={{ fontSize: '20px' }}>⏳ Searching...</span>
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

      {!loading && query && results.length === 0 && !error && (
        <div style={{ padding: '15px', color: '#888' }}>
          No users found matching "{query}"
        </div>
      )}

      {!loading && results.length > 0 && (
        <div>
          <p style={{ color: '#666', marginBottom: '15px' }}>
            Found {results.length} result{results.length !== 1 ? 's' : ''}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
            {results.map((user) => (
              <div
                key={user.id}
                style={{
                  padding: '15px',
                  backgroundColor: '#e7f3ff',
                  border: '1px solid #b3d9ff',
                  borderRadius: '4px',
                }}
              >
                <h4 style={{ margin: '0 0 10px 0' }}>{user.name}</h4>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>
                  <strong>@{user.username}</strong>
                </p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>📧 {user.email}</p>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>🌐 {user.website}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

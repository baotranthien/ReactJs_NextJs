import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import { addToCart } from './cartSlice';
import { addNotification } from './notificationSlice';

export function ProductContext() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      dispatch(addNotification({ message: 'Please login first', type: 'warning' }));
      return;
    }
    dispatch(addToCart(product));
    dispatch(addNotification({ message: `${product.name} added to cart!`, type: 'success' }));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px', marginBottom: '20px' }}>
      <h2>📦 Products</h2>

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
          <p>Loading products...</p>

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
          Error: {error}
        </div>
      )}

      {!loading && items.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
          {items.map((product) => (
            <div
              key={product.id}
              style={{
                padding: '15px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>{product.image}</div>
              <h4 style={{ margin: '0 0 8px 0' }}>{product.name}</h4>
              <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>{product.category}</p>
              <p style={{ margin: '10px 0', fontSize: '18px', color: '#007bff', fontWeight: 'bold' }}>
                ${product.price}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={!isLoggedIn}
                style={{
                  padding: '8px 15px',
                  backgroundColor: isLoggedIn ? '#28a745' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isLoggedIn ? 'pointer' : 'not-allowed',
                  width: '100%',
                  fontWeight: 'bold',
                }}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

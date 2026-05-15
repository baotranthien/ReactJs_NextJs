import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

const PRODUCTS = [
  { id: 1, name: 'Keyboard', price: 75 },
  { id: 2, name: 'Monitor', price: 299 },
  { id: 3, name: 'Headphones', price: 120 },
  { id: 4, name: 'Webcam', price: 85 },
];

export function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px', marginBottom: '20px' }}>
      <h3>📦 Available Products</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            style={{
              padding: '15px',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            <h4 style={{ margin: '0 0 10px 0' }}>{product.name}</h4>
            <p style={{ margin: '0 0 10px 0', color: '#007bff', fontWeight: 'bold' }}>
              ${product.price}
            </p>
            <button
              onClick={() => dispatch(addToCart(product))}
              style={{
                padding: '8px 12px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: 'bold',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

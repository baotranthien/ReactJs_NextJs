import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from './cartSlice';

export function CartItems() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <h3>🛒 Cart Items ({items.length})</h3>
      {items.length === 0 ? (
        <p style={{ color: '#888' }}>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '8px',
              }}
            >
              <div>
                <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                <p style={{ margin: 0, color: '#888' }}>${item.price}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  −
                </button>
                <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>

                <span style={{ fontWeight: 'bold', minWidth: '80px', textAlign: 'right' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: '15px',
              padding: '15px',
              backgroundColor: '#e7f3ff',
              borderRadius: '4px',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            Total: <span style={{ color: '#007bff' }}>${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}

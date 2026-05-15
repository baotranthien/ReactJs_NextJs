import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from './cartSlice';
import { addNotification } from './notificationSlice';

export function CartContext() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id, name) => {
    dispatch(removeFromCart(id));
    dispatch(addNotification({ message: `${name} removed from cart`, type: 'info' }));
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      dispatch(addNotification({ message: 'Cart is empty', type: 'warning' }));
      return;
    }
    dispatch(addNotification({ message: `Order placed! Total: $${total.toFixed(2)}`, type: 'success' }));
    dispatch(clearCart());
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <h2>🛒 Shopping Cart</h2>

      {items.length === 0 ? (
        <p style={{ color: '#888' }}>Your cart is empty. Add some products!</p>
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
                <h4 style={{ margin: '0 0 5px 0' }}>{item.image} {item.name}</h4>
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
                  onClick={() => handleRemove(item.id, item.name)}
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
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              Total: <span style={{ color: '#007bff' }}>${total.toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => dispatch(clearCart())}
                style={{
                  padding: '10px 15px',
                  backgroundColor: '#ffc107',
                  color: 'black',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                style={{
                  padding: '10px 15px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

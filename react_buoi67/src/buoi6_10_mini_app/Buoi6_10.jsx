import { Provider } from 'react-redux';
import { store10 } from './store';
import { NotificationCenter } from './NotificationCenter';
import { AuthContext } from './AuthContext';
import { ProductContext } from './ProductContext';
import { CartContext } from './CartContext';

export function Buoi6_10() {
  return (
    <Provider store={store10}>
      <NotificationCenter />
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h1>🏪 Exercise 10: Mini App (Tổng hợp)</h1>
        <p>Complete e-commerce app with Auth, Products, Cart, Notifications</p>

        <AuthContext />
        <ProductContext />
        <CartContext />
      </div>
    </Provider>
  );
}

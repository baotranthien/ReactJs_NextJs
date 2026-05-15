import { Provider } from 'react-redux';
import { store5 } from './store';
import { ProductList } from './ProductList';
import { CartItems } from './CartItems';

export function Buoi6_5() {
  return (
    <Provider store={store5}>
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h1>🛍️ Exercise 5: Cart (Giỏ hàng)</h1>
        <p>Goal: Business logic state management</p>
        <ProductList />
        <CartItems />
      </div>
    </Provider>
  );
}

import { Provider } from 'react-redux';
import { store8 } from './store';
import { SearchComponent } from './SearchComponent';

export function Buoi6_8() {
  return (
    <Provider store={store8}>
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h1>🔎 Exercise 8: Search + Debounce + API</h1>
        <p>Goal: Advanced async with debounce optimization</p>
        <SearchComponent />
      </div>
    </Provider>
  );
}

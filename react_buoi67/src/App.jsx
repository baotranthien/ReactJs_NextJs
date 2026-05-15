import { useState } from 'react';
import { Buoi6_1 } from './buoi6_1_counter/Buoi6_1';
import { Buoi6_2 } from './buoi6_2_theme/Buoi6_2';
import { Buoi6_3 } from './buoi6_3_auth/Buoi6_3';
import { Buoi6_4 } from './buoi6_4_todo/Buoi6_4';
import { Buoi6_5 } from './buoi6_5_cart/Buoi6_5';
import { Buoi6_6 } from './buoi6_6_notification/Buoi6_6';
import { Buoi6_7 } from './buoi6_7_fetch_users/Buoi6_7';
import { Buoi6_8 } from './buoi6_8_search/Buoi6_8';
import { Buoi6_9 } from './buoi6_9_auth_api/Buoi6_9';
import { Buoi6_10 } from './buoi6_10_mini_app/Buoi6_10';
import './App.css';

const exercises = [
  { id: 1, name: 'Counter Global', component: Buoi6_1 },
  { id: 2, name: 'Theme Toggle', component: Buoi6_2 },
  { id: 3, name: 'Auth (Login/Logout)', component: Buoi6_3 },
  { id: 4, name: 'Todo List Global', component: Buoi6_4 },
  { id: 5, name: 'Cart (Giỏ hàng)', component: Buoi6_5 },
  { id: 6, name: 'Notification System', component: Buoi6_6 },
  { id: 7, name: 'Fetch Users', component: Buoi6_7 },
  { id: 8, name: 'Search + Debounce', component: Buoi6_8 },
  { id: 9, name: 'Auth + API + Token', component: Buoi6_9 },
  { id: 10, name: 'Mini App (Complete)', component: Buoi6_10 },
];

function App() {
  const [activeExercise, setActiveExercise] = useState(1);

  const CurrentComponent = exercises.find((ex) => ex.id === activeExercise)?.component;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: '#2c3e50',
        padding: '15px 20px',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 15px 0' }}>📚 Buổi 6 - State Management (Redux Toolkit)</h2>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {exercises.map((exercise) => (
              <button
                key={exercise.id}
                onClick={() => setActiveExercise(exercise.id)}
                style={{
                  padding: '10px 15px',
                  backgroundColor: activeExercise === exercise.id ? '#3498db' : '#34495e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: activeExercise === exercise.id ? 'bold' : 'normal',
                  transition: 'all 0.3s ease',
                  boxShadow: activeExercise === exercise.id ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
                }}
                onMouseOver={(e) => {
                  if (activeExercise !== exercise.id) {
                    e.target.style.backgroundColor = '#4a6278';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeExercise !== exercise.id) {
                    e.target.style.backgroundColor = '#34495e';
                  }
                }}
              >
                {exercise.id}. {exercise.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '30px 20px',
      }}>
        {CurrentComponent && <CurrentComponent />}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
      }}>
        <p>
          💡 All exercises use <strong>Redux Toolkit</strong> for state management
        </p>
      </footer>
    </div>
  );
}

export default App;

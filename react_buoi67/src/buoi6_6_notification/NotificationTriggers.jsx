import { useDispatch } from 'react-redux';
import { addNotification } from './notificationSlice';

export function NotificationTriggers() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <h3>🔔 Trigger Notifications</h3>
      <p>(Called from any component - Toast auto-dismisses after 3s)</p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={() => dispatch(addNotification({ message: '✅ Success!', type: 'success' }))}
          style={{
            padding: '10px 15px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Success
        </button>
        <button
          onClick={() => dispatch(addNotification({ message: '❌ Error occurred!', type: 'error' }))}
          style={{
            padding: '10px 15px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Error
        </button>
        <button
          onClick={() => dispatch(addNotification({ message: 'ℹ️ Information', type: 'info' }))}
          style={{
            padding: '10px 15px',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Info
        </button>
        <button
          onClick={() => dispatch(addNotification({ message: '⚠️ Warning!', type: 'warning' }))}
          style={{
            padding: '10px 15px',
            backgroundColor: '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Warning
        </button>
      </div>
    </div>
  );
}

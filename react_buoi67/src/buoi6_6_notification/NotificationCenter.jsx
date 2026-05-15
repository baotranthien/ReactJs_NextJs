import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from './notificationSlice';

export function NotificationCenter() {
  const messages = useSelector((state) => state.notifications.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      const timer = setTimeout(() => {
        dispatch(removeNotification(lastMessage.id));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [messages, dispatch]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        maxWidth: '400px',
      }}
    >
      {messages.map((notification) => {
        const bgColor = {
          success: '#d4edda',
          error: '#f8d7da',
          info: '#d1ecf1',
          warning: '#fff3cd',
        }[notification.type];

        const borderColor = {
          success: '#c3e6cb',
          error: '#f5c6cb',
          info: '#bee5eb',
          warning: '#ffeaa7',
        }[notification.type];

        return (
          <div
            key={notification.id}
            style={{
              backgroundColor: bgColor,
              border: `1px solid ${borderColor}`,
              borderRadius: '4px',
              padding: '15px',
              marginBottom: '10px',
              animation: 'slideIn 0.3s ease-in-out',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {notification.message}
          </div>
        );
      })}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

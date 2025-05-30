import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://192.168.49.2:31000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch((err) => {
        console.error("Fetch error:", err);
        setMessage('Failed to fetch backend message');
      });
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;

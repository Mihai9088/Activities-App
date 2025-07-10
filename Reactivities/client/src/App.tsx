import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://localhost:5001/api/activities');
      const data = await response.json();
      setActivities(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className="app" style={{ color: 'red' }}>
        Reactivities
      </h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

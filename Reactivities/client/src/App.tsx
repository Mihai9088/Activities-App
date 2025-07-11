import { List, ListItem, ListItemText, Typography } from '@mui/material';
import './App.css';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Activity[]>('https://localhost:5001/api/activities');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Typography className="app" variant="h3">
        Reactivities
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default App;

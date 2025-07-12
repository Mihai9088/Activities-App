import { Grid2 } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetail from './details/ActivityDetail';

type Props = {
  activities: Activity[];
};

const ActivityDashboard = ({ activities }: Props) => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList activities={activities} />
      </Grid2>
      <Grid2 size={5}>{activities.length > 0 && <ActivityDetail activity={activities[0]} />}</Grid2>
    </Grid2>
  );
};

export default ActivityDashboard;

import { Grid2 } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetail from './details/ActivityDetail';

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  selectedActivity?: Activity;
  cancelSelectActivity: () => void;
};

const ActivityDashboard = ({
  activities,
  selectedActivity,
  cancelSelectActivity,
  selectActivity,
}: Props) => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && (
          <ActivityDetail cancelSelectActivity={cancelSelectActivity} activity={selectedActivity} />
        )}
      </Grid2>
    </Grid2>
  );
};

export default ActivityDashboard;

import { Grid2 } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetail from './details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  selectedActivity?: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
  closeForm: () => void;
  editMode: boolean;
};

const ActivityDashboard = ({
  activities,
  selectedActivity,
  cancelSelectActivity,
  selectActivity,
  openForm,
  closeForm,
  editMode,
}: Props) => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            openForm={openForm}
            cancelSelectActivity={cancelSelectActivity}
            activity={selectedActivity}
          />
        )}
        {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} />}
      </Grid2>
    </Grid2>
  );
};

export default ActivityDashboard;

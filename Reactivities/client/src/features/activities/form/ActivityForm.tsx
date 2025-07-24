import { Box, Button, Paper, Typography } from '@mui/material';
import useActivities from '../../../lib/hooks/useActivities';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { activitySchema } from '../../../lib/schemas/activitySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectInput from '../../../app/shared/components/SelectInput';
import { categoryOptions } from './CategoryOptions';
import TextInput from '../../../app/shared/components/TextInput';
import DateTimeInput from '../../../app/shared/components/DateTimeInput';
import LocationInput from '../../../app/shared/components/LocationInput';

export default function ActivityForm() {
  const { reset, handleSubmit, control } = useForm<activitySchema>({
    mode: 'onTouched',
    resolver: zodResolver(activitySchema),
  });
  const { id } = useParams();
  const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);

  useEffect(() => {
    if (activity) reset(activity);
  }, [activity, reset]);

  const onSubmit = async (data: activitySchema) => {
    console.log(data);
  };

  if (isLoadingActivity) return <Typography>Loading...</Typography>;
  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity ? 'Edit Activity' : 'Create Activity'}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextInput label="Title" control={control} name="title" />
        <TextInput label="Description" control={control} name="description" multiline rows={4} />
        <SelectInput label="Category" items={categoryOptions} control={control} name="category" />
        <DateTimeInput label="Date" control={control} name="date" />
        <LocationInput label="Location" control={control} name="location" />
        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit">Cancel</Button>
          <Button
            disabled={updateActivity.isPending || createActivity.isPending}
            type="submit"
            color="success"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

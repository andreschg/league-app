import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

interface Props {
  isLoading: boolean
};

export default ({ isLoading }: Props) => (
  <Dialog open={isLoading}>
    <DialogContent>
      <div className="loading--circular-progress">
        <CircularProgress color="secondary" size={80} />
      </div>
    </DialogContent>
  </Dialog>
);
import * as React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

interface Props {
  message: string,
  onCloseHandler: any
}

const MessageDialog = ({ message, onCloseHandler }: Props) => (
      <Dialog open={!!message} onClose={onCloseHandler} >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { message }
          </DialogContentText>
        </DialogContent>
      </Dialog>
);

export default MessageDialog;
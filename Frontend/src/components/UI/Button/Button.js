import styles from './Button.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { makeFalseFunc, makeTrueFunc } from '../../../actionTypes/cardAction';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button as MUIButton } from '@mui/material';

export const Button = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleYes = () => {
    dispatch(makeTrueFunc());
    setOpen(false);
  };

  const handleNo = () => {
    dispatch(makeFalseFunc());
    setOpen(false);
  };

  return (
    <>
      {props.ask ? (
        <>
          <button className={`${styles.btn}`} onClick={handleOpen}>
            {props.content}
          </button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="resume-dialog-title"
            aria-describedby="resume-dialog-description"
          >
            <DialogTitle id="resume-dialog-title">
              Choose Resume Layout
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="resume-dialog-description">
                Do you want a <strong>single-column</strong> resume layout?
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <MUIButton onClick={handleYes} variant="contained" color="primary">
                Yes
              </MUIButton>
              <MUIButton onClick={handleNo} variant="outlined" color="secondary">
                No
              </MUIButton>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <button className={`${styles.btn}`}>
          {props.content}
        </button>
      )}
    </>
  );
};

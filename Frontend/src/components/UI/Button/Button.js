import styles from './Button.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { makeFalseFunc, makeTrueFunc } from '../../../actionTypes/cardAction';

import * as Mui from '@mui/material';

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

          <Mui.Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="resume-dialog-title"
            aria-describedby="resume-dialog-description"
          >
            <Mui.DialogTitle id="resume-dialog-title">
              Choose Resume Layout
            </Mui.DialogTitle>

            <Mui.DialogContent>
              <Mui.DialogContentText id="resume-dialog-description">
                Do you want a <strong>single-column</strong> resume layout?
              </Mui.DialogContentText>
            </Mui.DialogContent>

            <Mui.DialogActions>
              <Mui.Button onClick={handleYes} variant="contained" color="primary">
                Yes
              </Mui.Button>
              <Mui.Button onClick={handleNo} variant="outlined" color="secondary">
                No
              </Mui.Button>
            </Mui.DialogActions>
          </Mui.Dialog>
        </>
      ) : (
        <button className={`${styles.btn}`}>
          {props.content}
        </button>
      )}
    </>
  );
};

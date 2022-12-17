import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../store/ui-slice";

function Notification({ type, message }) {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const handleClose = () => {
    dispatch(
      uiSliceActions.showNotification({
        open: false,
      })
    );
  };

  return (
    <>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </>
  );
}

export default Notification;

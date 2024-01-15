import React from "react";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalView = ({ videoUrl, handleClose }) => {
  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <CloseIcon />
      </IconButton>
      <video width="100%" height="auto" controls autoPlay muted src={videoUrl}></video>
    </Modal>
  );
};

export default ModalView;

import React, { useEffect } from 'react';
import { useProducts } from '../context/ProductContextProvider';
import { useParams } from 'react-router-dom';
import { Modal } from 'antd';
import { Box } from '@mui/material';

const Body = ({ item }) => {
  const style = {
    position: 'absolute',
    top: '30%',
    left: '30%',
    width: 700,
    display: 'flex',
    border: '2px solid black',
    boxShadow: 24,
    bgcolor: 'background.paper',
    p: 4,
  };

  if (!item) {
    // If item is undefined, you can handle it accordingly
    return null;
  }

  return (
    <div>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <img width={500} src={item.picture} alt={item.title} />
          </div>
          <div>
            <h1>{item.title}</h1>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Body;

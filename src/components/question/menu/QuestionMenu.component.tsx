import React from 'react';
import {Box, Button, ButtonGroup, Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface MenuProps {
  onEdit: () => void;
  onPreview: () => void;
  onDelete: () => void;
}

const QuestionMenuComponent: React.FC<MenuProps> = (props) => {
  return (
    <Box sx={{mb: 2}}>
      {/*<Fab color="primary" aria-label="add" sx={{mr: 2}}>*/}
      {/*  <AddIcon />*/}
      {/*</Fab>*/}

      <Fab
        onClick={props.onPreview}
        size='small'
        color="primary"
        aria-label="preview" sx={{mr: 2}}>
        <VisibilityIcon fontSize='small'/>
      </Fab>

      <Fab
        onClick={props.onEdit}
        size='small'
        color="warning"
        aria-label="edit"
        sx={{mr: 2}}>
        <EditIcon fontSize='small'/>
      </Fab>

      <Fab
        onClick={props.onDelete}
        size='small'
        color="error"
        aria-label="delete"
        sx={{mr: 2}}>
        <DeleteIcon fontSize='small'/>
      </Fab>

    </Box>
  );
};

export default QuestionMenuComponent;
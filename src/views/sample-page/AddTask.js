import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';
import Button from 'react-bootstrap/Button';
import { TextField } from '@mui/material';


export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
  
      <TextField
        placeholder="Add "
        value={text}
        id="outlined-multiline-flexible"
        label="Menu"
        multiline
        maxRows={4}
        onChange={e => setText(e.target.value)}
      />
    
      <Button variant="outline-primary" onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
          
        });
      }}>Add</Button>
    </>
  );
}

let nextId = 3;

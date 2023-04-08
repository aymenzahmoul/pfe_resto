import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';
import Button from 'react-bootstrap/Button';
import { TextField } from '@mui/material';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
      
        <TextField
         id="outlined-multiline-flexible"
         label="Menu"
         multiline
         maxRows={4}
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <Button variant="outline-warning" onClick={() => setIsEditing(false)}>
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button variant="outline-warning" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <Button variant="outline-danger" onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </Button>
    </label>
  );
}

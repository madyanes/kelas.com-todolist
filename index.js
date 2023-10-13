import express from 'express';
import * as tasksService from './services/tasks.js';

const app = express();

app.use(express.json());

app.get('/tasks', tasksService.getTasks);
app.post('/tasks', tasksService.createTask);
app.delete('/tasks/:id', tasksService.deleteTask);

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

/** Uncomment this to update a task. */
// await tasksService.updateTask(10, 'Beli keyboard', 0);

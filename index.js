import express from 'express';
import * as tasksService from './services/tasks.js';

const app = express();

app.use(express.json());

app.get('/tasks', tasksService.getTasks);

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

/** Uncomment this to create a task. */
// await tasksService.createTasks(1, 'Beli gula', 1);

/** Uncomment this to delete a task. */
// await tasksService.deleteTask(11);

/** Uncomment this to update a task. */
// await tasksService.updateTask(10, 'Beli keyboard', 0);

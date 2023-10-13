import express from 'express';
import * as tasksService from './services/tasks.js';

const app = express();

app.use(express.json());

app.get('/tasks', tasksService.getTasks);
app.post('/tasks', tasksService.createTask);
app.delete('/tasks/:id', tasksService.deleteTask);
app.put('/tasks/:id', tasksService.updateTask);

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});

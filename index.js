import * as tasksService from './services/tasks.js';

await tasksService.getTasks();

/** Uncomment this to create a task. */
// await tasksService.createTasks(1, 'Beli gula', 1);

/** Uncomment this to delete a task. */
// await tasksService.deleteTask(11);

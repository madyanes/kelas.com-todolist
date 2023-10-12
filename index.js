import * as tasksService from './services/tasks.js';

await tasksService.getTasks();

/** Uncomment this to create a task. */
// await tasksService.createTasks(1, 'Beli gula', 1);

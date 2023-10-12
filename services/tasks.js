import * as tasksRepo from '../repositories/tasks.js';

const getTasks = async () => {
  const [tasks] = await tasksRepo.getTasks();

  if (tasks.length === 0) {
    console.log('No tasks.');
  } else {
    console.log(tasks);
  }
};

export { getTasks };

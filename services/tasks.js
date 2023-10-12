import * as tasksRepo from '../repositories/tasks.js';

const getTasks = async () => {
  const [tasks] = await tasksRepo.getTasks();

  if (tasks.length === 0) {
    console.log('No tasks.');
  } else {
    console.log(tasks);
  }
};

const createTasks = async (userId, title, isDone) => {
  let [result] = await tasksRepo.createTask(userId, title, isDone);

  if (result.insertId) {
    console.log(`Task with ID ${result.insertId} is created.`);
  } else {
    console.log('Failed to create a task.');
  }
};

const deleteTask = async (taskId) => {
  const [result] = await tasksRepo.deleteTask(taskId);

  if (result.affectedRows) {
    console.log(`Task with ID ${taskId} is deleted.`);
  } else {
    console.log(`Task with ID ${taskId} is not found.`);
  }
};

const updateTask = async (taskId, title, isDone) => {
  const [result] = await tasksRepo.updateTask(taskId, title, isDone);

  if (result.affectedRows) {
    console.log(`Task with ID ${taskId} is updated.`);
  } else {
    console.log(`Task with ID ${taskId} is not found.`);
  }
};

export { getTasks, createTasks, deleteTask, updateTask };

import * as tasksRepo from '../repositories/tasks.js';
import { errorResponse, successResponse } from '../utils/response.js';

const getTasks = async (req, res, next) => {
  try {
    const [tasks] = await tasksRepo.getTasks();

    if (tasks.length === 0) {
      errorResponse(res, 'No tasks found.', 404);
    } else {
      successResponse(res, 'Success.', tasks);
    }
  } catch (error) {
    next(error);
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

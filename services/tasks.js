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

const createTask = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const title = req.body.title;
    const isDone = req.body.isDone;

    const [result] = await tasksRepo.createTask(userId, title, isDone);

    if (result.insertId) {
      successResponse(
        res,
        `Task with ID ${result.insertId} is created.`,
        { id: result.insertId },
        201
      );
    } else {
      errorResponse(res, 'Task is not created.', 500);
    }
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const [result] = await tasksRepo.deleteTask(taskId);

    if (result.affectedRows) {
      successResponse(res, `Task with ID ${taskId} is deleted.`, 204);
    } else {
      errorResponse(res, `Task with ID ${taskId} is not found.`, 404);
    }
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const title = req.body.title;
    const isDone = req.body.isDone;

    const [result] = await tasksRepo.updateTask(taskId, title, isDone);

    if (result.affectedRows) {
      successResponse(res, `Task with ID ${taskId} is updated.`, result, 204);
    } else {
      errorResponse(res, `Task with ID ${taskId} is not found.`, 404);
    }
  } catch (error) {
    next(error);
  }
};

export { getTasks, createTask, deleteTask, updateTask };

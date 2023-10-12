import dbPool from '../utils/db.js';
import {
  ObjectKeysToString,
  ObjectKeysToStringForUpdate,
  ObjectValues,
} from '../utils/helper.js';

const getTasks = async () => {
  const query =
    'SELECT task_id, user_id, title, is_done, created_at FROM tasks';
  return dbPool.query(query);
};

const createTask = async (userId, title, isDone) => {
  const createdAt = new Date();
  const newRecord = {
    user_id: userId,
    title: title,
    is_done: isDone,
    created_at: createdAt,
  };

  const keys = ObjectKeysToString(newRecord);
  const values = ObjectValues(newRecord);

  const query = `INSERT INTO tasks(${keys}) VALUES(?, ?, ?, ?)`;

  return dbPool.query(query, values);
};

const deleteTask = async (taskId) => {
  const query = 'DELETE FROM tasks WHERE task_id = ?';
  return dbPool.query(query, taskId);
};

const updateTask = async (taskId, title, isDone) => {
  const updatedRecord = {
    title: title,
    is_done: isDone,
    updated_at: new Date(),
  };

  const keys = ObjectKeysToStringForUpdate(updatedRecord);
  const values = ObjectValues(updatedRecord).concat(taskId);

  const query = `UPDATE tasks SET ${keys} WHERE task_id = ?`;
  return dbPool.query(query, values);
};

export { getTasks, createTask, deleteTask, updateTask };

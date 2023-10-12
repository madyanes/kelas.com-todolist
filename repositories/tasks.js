import dbPool from '../utils/db.js';

const getTasks = async () => {
  const query =
    'SELECT task_id, user_id, title, is_done, created_at FROM tasks';
  return dbPool.query(query);
};

export { getTasks };

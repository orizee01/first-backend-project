/* Replace with your SQL commands */
CREATE TYPE todo_status AS ENUM ('todo', 'doing', 'done');
ALTER TABLE todo ADD COLUMN IF NOT EXISTS status todo_status DEFAULT 'todo';


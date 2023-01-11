/* Replace with your SQL commands */
DROP TYPE IF EXISTS todo_status CASCADE;
CREATE TYPE todo_status AS ENUM ('todo', 'doing', 'done');
ALTER TABLE todo ADD COLUMN IF NOT EXISTS status todo_status DEFAULT 'todo';


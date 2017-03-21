\c jack_mini

DROP TABLE IF EXISTS times;

CREATE TABLE times (
  id SERIAL PRIMARY KEY,
  puzzle_date DATE,
  solution_time INTEGER,
  user_id INTEGER NOT NULL REFERENCES users(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

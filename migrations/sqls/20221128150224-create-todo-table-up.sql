/* Replace with your SQL commands */
CREATE TABLE todo (
id  SERIAL PRIMARY KEY NOT NULL,
users_id serial REFERENCES users(id),
title VARCHAR,
description VARCHAR,
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

);



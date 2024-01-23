import pool from "../database/connection.js";

// model is a file where we define our database schema / tables

// table users
export async function createUserTable() {
  try {
    const query = `
    CREATE TABLE IF NOT EXISTS "Users" (
        id SERIAL PRIMARY KEY,
        username VARCHAR(120) UNIQUE,
        email TEXT UNIQUE,
        password TEXT
    );
`;
    await pool.query(query);
    console.log("User table created successfully");
  } catch (error) {
    console.log(error, "hello");
  }
}

// table todos
export async function createTodoTable() {
  try {
    const query = `
    CREATE TABLE IF NOT EXISTS "Todos" (
        id SERIAL PRIMARY KEY,
        title TEXT,
        description TEXT,
        user_id INTEGER REFERENCES "Users"(id)
    );
`;
    await pool.query(query);
    console.log("Todo table created successfully");
  } catch (error) {
    console.log(error);
  }
}

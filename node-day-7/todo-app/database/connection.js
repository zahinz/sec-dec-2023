// establish connection with database
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "zahin",
  // password: '',
  database: "todo_app",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// pool is a passport to send requests to database

export async function checkConnection() {
  try {
    //  resolved promise
    const client = await pool.connect();
    console.log("Connected to database", client.database);
  } catch (error) {
    // rejected promise
    console.log("Could not connect to database", error);
  }
}

export default pool;

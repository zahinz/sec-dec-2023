import pool from "../database/connection.js";

export async function register(req, res) {
  try {
    const reqBody = req.body;
    // create new user in database
    // query is always a string, dynamic values are passed as an array with the $ sign
    const query = `
      INSERT INTO "Users" (username, email, "password")
      VALUES($1, $2, $3);
      `;
    const values = [reqBody.username, reqBody.email, reqBody.password];
    await pool.query(query, values);
    const apiResponse = {
      message: "User created successfully",
    };
    res.status(200).json(apiResponse);
  } catch (error) {
    //   why 500? because it is a server error due to promise rejection by the database connection pool
    res.status(500).json(error);
  }
}

export async function login(req, res) {
  try {
    const reqBody = req.body;
    // check if email exists in database
    const query = `
        SELECT * FROM "Users"
        WHERE email=$1;
        `;
    const values = [reqBody.email];
    const response = await pool.query(query, values);

    // if email not found, return 404
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    // if email found, check if password matches
    if (reqBody.password !== response.rows[0].password) {
      return res.status(401).json({ message: "Password incorrect" });
    }

    // if password matches, return user object
    const apiResponse = {
      message: "Login successful",
      user: response.rows[0],
    };
    res.status(200).json(apiResponse);
  } catch (error) {
    res.status(500).json(error);
  }
}

// list all users
// route : GET /users

// get user by id
// route : GET /users/:id

// update user by id
// route : PUT /users/:id

// delete user by id
// route : DELETE /users/:id

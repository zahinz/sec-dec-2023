import pool from "../database/connection.js";

async function create(req, res) {
  const title = req.body.title;
  const description = req.body.description;
  // this is how you access the user data from the middleware
  const authData = req.user;
  try {
    //   create a todo in the database
    const query = `
      INSERT INTO "Todos" (title, description, user_id)
      VALUES ($1, $2, $3)
      `;
    const values = [title, description, authData.id];
    await pool.query(query, values);

    return res.json({
      message: "a todo is created",
      data: {
        title: title,
        description: description,
        user_id: authData.id,
      },
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function list(req, res) {
  try {
    const authData = req.user;
    const query = `
        SELECT * FROM "Todos" WHERE user_id = $1
        `;
    const values = [authData.id];
    const response = await pool.query(query, values);
    return res.status(200).json({
      message: `${response.rows.length} todos found`,
      data: response.rows,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// update controller
// route is PUT /todo/:id

// delete controller
// route is DELETE /todo/:id

// get controller
// route is GET /todo/:id

const todoController = {
  create: create,
  list: list,
  // update: update,
  // delete: delete,
  // get: get,
};

export default todoController;

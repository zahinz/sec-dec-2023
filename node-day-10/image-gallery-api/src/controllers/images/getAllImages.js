import pool from "../../database/connection";

async function getAllImages(req, res) {
  try {
    //   select all images from the database which mimetype is start with "image"
    const query = `SELECT * FROM files WHERE mimetype LIKE 'image%' ORDER BY created_at DESC;`;
    const response = await pool.query(query);
    const images = response.rows;
    const message = `Successfully retrieved ${images.length} images`;
    return res.status(200).json({ message, data: images });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
}

export default getAllImages;

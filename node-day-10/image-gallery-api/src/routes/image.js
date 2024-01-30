import express from "express";
import getAllImages from "../controllers/images/getAllImages";

const image = express.Router();

image.get("/", getAllImages);

export default image;

import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {addFood, listFood, removeFood} from '../controllers/foodController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const foodRouter = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// POST route with image upload
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;

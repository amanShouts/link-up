import Router from 'express';
import { addResource, listResources } from '../controllers/resourceController';
import multer from 'multer';

export const resourceRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

resourceRouter.post("/add",upload.single('file'),  addResource);
resourceRouter.get("/list", listResources)
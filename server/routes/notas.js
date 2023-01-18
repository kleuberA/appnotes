import express from  "express";
import { getNotas, addNotas, updateNotas, deleteNota } from "../controller/nota.js";

const router = express.Router();


router.get('/', getNotas);
router.post("/", addNotas);
router.put("/:id", updateNotas);
router.delete("/:id", deleteNota)

export default router;
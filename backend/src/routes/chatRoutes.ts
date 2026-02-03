import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import { getChats, getOrCreateChat } from "../controllers/chatController";

const router = Router();

// alternative way to use protected route if you have many routes there
router.use(protectRoute);

router.get("/", getChats);
router.post("/with/:participantId", getOrCreateChat);

export default router;

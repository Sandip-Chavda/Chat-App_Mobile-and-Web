import { Router } from "express";
import { authCallback, getMe } from "../controllers/authController";
import { protectRoute } from "../middleware/auth";

const router = Router();

router.get("/me", protectRoute, getMe); // /api/auth/me
router.post("/callback", authCallback); // /api/auth/callback

export default router;

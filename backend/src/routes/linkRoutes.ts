import {
  createLink,
  getAllLinks,
  getLinkById,
  deleteLink,
  updateLink,
  redirectLink,
  resolveLink,
} from "../controllers/linkController";

import { Router } from "express";

const router = Router();

// Create link
router.post("/", createLink);

// Get all links
router.get("/", getAllLinks);

// Extension uses this
router.get("/resolve/:shortUrl", resolveLink);

// Normal browser redirect
router.get("/redirect/:shortUrl", redirectLink);

// Get one link by MongoDB ID
router.get("/id/:id", getLinkById);

// Update link
router.patch("/:id", updateLink);

// Delete link
router.delete("/:id", deleteLink);

export default router;

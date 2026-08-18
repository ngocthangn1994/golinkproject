import Link from "../models/Link";
import { Request, Response, NextFunction } from "express";

// ========================================
// CREATE LINK
// POST /api/v1/links
// ========================================

export const createLink = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { shortUrl, longUrl } = req.body;

    if (!shortUrl || !longUrl) {
      return res.status(400).json({
        success: false,
        message: "shortUrl and longUrl are required.",
      });
    }

    const normalizedShortUrl = shortUrl.trim().toLowerCase();
    const normalizedLongUrl = longUrl.trim();

    // Check whether shortcut already exists
    const existingLink = await Link.findOne({
      shortUrl: normalizedShortUrl,
    });

    if (existingLink) {
      return res.status(409).json({
        success: false,
        message: "This shortUrl already exists.",
      });
    }

    const link = await Link.create({
      shortUrl: normalizedShortUrl,
      longUrl: normalizedLongUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Successfully created link.",
      data: link,
    });
  } catch (error) {
    next(error);
  }
};

// ========================================
// GET ALL LINKS
// GET /api/v1/links
// ========================================

export const getAllLinks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const links = await Link.find();

    return res.status(200).json({
      success: true,
      message: "Successfully got all links.",
      data: links,
    });
  } catch (error) {
    next(error);
  }
};

// ========================================
// GET LINK BY ID
// ========================================

export const getLinkById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;

    const link = await Link.findById(id);

    if (!link) {
      return res.status(404).json({
        success: false,
        message: "Link not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully got link by id.",
      data: link,
    });
  } catch (error) {
    next(error);
  }
};

// ========================================
// UPDATE LINK
// ========================================

export const updateLink = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;

    const { shortUrl, longUrl } = req.body;

    const updateData: {
      shortUrl?: string;
      longUrl?: string;
    } = {};

    if (shortUrl) {
      updateData.shortUrl = shortUrl.trim().toLowerCase();
    }

    if (longUrl) {
      updateData.longUrl = longUrl.trim();
    }

    const link = await Link.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!link) {
      return res.status(404).json({
        success: false,
        message: "Link not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully updated link.",
      data: link,
    });
  } catch (error) {
    next(error);
  }
};

// ========================================
// DELETE LINK
// ========================================

export const deleteLink = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;

    const link = await Link.findByIdAndDelete(id);

    if (!link) {
      return res.status(404).json({
        success: false,
        message: "Link not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully deleted link.",
      data: link,
    });
  } catch (error) {
    next(error);
  }
};

// ========================================
// REDIRECT LINK
// Example:
// GET /api/v1/links/sam
// ========================================

export const redirectLink = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const shortUrl = req.params.shortUrl;

    if (typeof shortUrl !== "string" || !shortUrl.trim()) {
      return res.status(400).json({
        success: false,
        message: "Invalid shortUrl parameter.",
      });
    }

    const normalizedShortUrl = shortUrl.trim().toLowerCase();

    const link = await Link.findOne({
      shortUrl: normalizedShortUrl,
    });

    if (!link) {
      return res.status(404).json({
        success: false,
        message: "Shortcut not found.",
      });
    }

    if (!link.longUrl) {
      return res.status(422).json({
        success: false,
        message: "Shortcut does not have a destination URL.",
      });
    }

    return res.redirect(link.longUrl);
  } catch (error) {
    next(error);
  }
};

// ========================================
// RESOLVE LINK FOR BROWSER EXTENSION
// Example:
// GET /api/v1/links/resolve/sam
// ========================================

export const resolveLink = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const shortUrl = req.params.shortUrl;

    if (typeof shortUrl !== "string" || !shortUrl.trim()) {
      return res.status(400).json({
        success: false,
        message: "Invalid shortUrl parameter.",
      });
    }

    const normalizedShortUrl = shortUrl.trim().toLowerCase();

    const link = await Link.findOne({
      shortUrl: normalizedShortUrl,
    });

    if (!link) {
      return res.status(404).json({
        success: false,
        message: "Shortcut not found.",
      });
    }

    if (!link.longUrl) {
      return res.status(422).json({
        success: false,
        message: "Shortcut does not have a destination URL.",
      });
    }

    return res.status(200).json({
      success: true,
      longUrl: link.longUrl,
    });
  } catch (error) {
    next(error);
  }
};

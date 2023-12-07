import express from 'express';
import { createReview, updateReview, deleteReview, getAllReviews, getReviewById } from '../controllers/reviewController.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/token.js';

const router = express.Router();

// CREATE a review - Assuming only logged-in users can create a review
router.post('/', verifyToken, createReview);

// UPDATE a review - Assuming that only the user who created the review can update it
router.put('/:reviewId', verifyUser, updateReview);

// DELETE a review - Assuming that only the user who created the review, or an admin, can delete it
router.delete('/:reviewId', verifyUser, deleteReview);

// GET all reviews - This might be available to everyone or only to admins based on application's requirements
router.get('/', getAllReviews);

// GET a single review by ID - This could be available to all users or restricted based on application's requirements
router.get('/:reviewId', getReviewById);

export default router;
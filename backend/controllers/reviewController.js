import {
    createReview as createReviewService,
    updateReview as updateReviewService,
    deleteReview as deleteReviewService,
    getAllReviews as getAllReviewsService,
    getReviewById as getReviewByIdService,
  } from "../services/reviewService.js";
  
  export const createReview = async (req, res, next) => {
    try {
      const userId = req.user._id; // Assuming user ID is available in request
      const review = await createReviewService(userId, req.body);
      res.status(201).json(review);
    } catch (error) {
      next(error);
    }
  };
  
  export const updateReview = async (req, res, next) => {
    try {
      const userId = req.user._id;
      const reviewId = req.params.reviewId;
      const updatedReview = await updateReviewService(userId, reviewId, req.body);
      res.status(200).json(updatedReview);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteReview = async (req, res, next) => {
    try {
      const userId = req.user._id;
      const reviewId = req.params.reviewId;
      await deleteReviewService(userId, reviewId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
  
  export const getAllReviews = async (req, res, next) => {
    try {
      const reviews = await getAllReviewsService();
      res.status(200).json(reviews);
    } catch (error) {
      next(error);
    }
  };
  
  export const getReviewById = async (req, res, next) => {
    try {
      const reviewId = req.params.reviewId;
      const review = await getReviewByIdService(reviewId);
      res.status(200).json(review);
    } catch (error) {
      next(error);
    }
  };
  
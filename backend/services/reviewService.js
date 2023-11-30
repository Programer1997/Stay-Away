import Hotel from "../models/Hotel.js";
import Review from "../models/Review.js";
import Room from "../models/Room.js";
import User from "../models/User.js";


export const createReview = async (userId, reviewData) => {
    // Create the review
    const review = new Review(reviewData);
    await review.save();

    // Add reference to the user's reviews
    await User.findByIdAndUpdate(userId, {
        $push: { reviews: review._id }
    });

    // Add reference to the hotel's or room's reviews
    if (review.hotel) {
        await Hotel.findByIdAndUpdate(review.hotel, {
            $push: { reviews: review._id }
        });
    } else if (review.room) {
        await Room.findByIdAndUpdate(review.room, {
            $push: { reviews: review._id }
        });
    }

    return review;
};

export const updateReview = async (userId, reviewId, updateData) => {
    // Check if the user is the one who created the review
    const review = await Review.findOne({ _id: reviewId, user: userId });
    if (!review) {
        throw new Error("Review not found or user not authorized");
    }

    // Update the review
    const updatedReview = await Review.findByIdAndUpdate(reviewId, updateData, { new: true });
    return updatedReview;
};

export const deleteReview = async (userId, reviewId) => {
    // Check if the user is the one who created the review
    const review = await Review.findOne({ _id: reviewId, user: userId });
    if (!review) {
        throw new Error("Review not found or user not authorized");
    }

    // Delete the review
    await Review.findByIdAndDelete(reviewId);

    // Remove reference from the user's reviews
    await User.findByIdAndUpdate(userId, {
        $pull: { reviews: reviewId }
    });

    // Remove reference from the hotel's or room's reviews
    if (review.hotel) {
        await Hotel.findByIdAndUpdate(review.hotel, {
            $pull: { reviews: reviewId }
        });
    } else if (review.room) {
        await Room.findByIdAndUpdate(review.room, {
            $pull: { reviews: reviewId }
        });
    }
};

export const getAllReviews = async () => {
    try {
        const reviews = await Review.find({})
            .populate('user', 'username email') // example fields to populate from User
            .populate('hotel', 'name type') // example fields to populate from Hotel
            .populate('room', 'title price'); // example fields to populate from Room

        return reviews;
    } catch (error) {
        // Handle error (e.g., database connection issue)
        console.error("Error getting all reviews:", error.message);
        throw error;
    }
};

export const getReviewById = async (reviewId) => {
    try {
        const review = await Review.findById(reviewId)
            .populate('user', 'username email') // example fields to populate from User
            .populate('hotel', 'name type') // example fields to populate from Hotel
            .populate('room', 'title price'); // example fields to populate from Room

        if (!review) {
            throw new Error("Review not found");
        }

        return review;
    } catch (error) {
        // Handle error (e.g., review not found, invalid ID format)
        console.error("Error getting review:", error.message);
        throw error;
    }
};
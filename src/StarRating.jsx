import React from "react";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
    return (
    <div>
        <Rating
        fractions={2} // Allows half-star ratings
        initialRating={rating}
        onChange={(value) => setRating(value)}
        fullSymbol={<FaStar size={20} color="#ffc107" />}
        emptySymbol={<FaRegStar size={20} color="#e4e5e9" />}
        placeholderSymbol={<FaStarHalfAlt size={20} color="#ffc107" />}
        />
    </div>
    );
};

export default StarRating;

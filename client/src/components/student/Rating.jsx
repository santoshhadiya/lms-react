// Rating.js
import { useState } from 'react';

const Rating = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    onRate(value); // Pass the rating value to the parent component
  };

  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRating(star)}
          className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default Rating;
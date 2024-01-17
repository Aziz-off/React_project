import React, { useState } from 'react';

const ProductRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h3>Product Rating</h3>
      <p>Current Rating: {rating}</p>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRatingChange(value)}
            style={{ backgroundColor: rating >= value ? 'gold' : 'transparent' }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductRating;

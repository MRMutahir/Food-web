import React, { useState } from "react";

function Start() {
  const [rating, setRating] = useState(3); // Set an initial rating value

  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value);
    setRating(newRating);
  };

  return (
    <div>
      <h2>Star Rating Component</h2>
      <div className="rating">
        <input
          type="radio"
          name="rating"
          value="1"
          className="mask mask-star-2 "
          checked={rating === 1}
          onChange={handleRatingChange}

        />
        <input
          type="radio"
          name="rating"
          value="2"
          className="mask mask-star-2 "
          checked={rating === 2}
          onChange={handleRatingChange}

        />
        <input
          type="radio"
          name="rating"
          value="3"
          className="mask mask-star-2 "
          checked={rating === 3}
          onChange={handleRatingChange}

        />
        <input
          type="radio"
          name="rating"
          value="4"
          className="mask mask-star-2 "
          checked={rating === 4}
          onChange={handleRatingChange}

        />
        <input
          type="radio"
          name="rating"
          value="5"
          className="mask mask-star-2"
          checked={rating === 5}
          onChange={handleRatingChange}

        />
      </div>
      <p>Selected rating: {rating}</p>
    </div>
  );
}

export default Start;

import React, { useState } from "react";
import "../../src/index.css"

function Start() {
  const [rating, setRating] = useState(0); // Initialize rating to 0 (no stars selected)

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h2>Star Rating Component</h2>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <label
            key={value}
            className={`mask mask-star-2 ${value <= rating ? "filled" : ""}`}
            onClick={() => handleRatingChange(value)} // Update the rating on click
          >
            <input
              type="radio"
              name="rating"
              value={value}
              checked={value === rating} // Check the input when its value matches the current rating
              onChange={() => {}} // Make onChange a no-op to prevent radio button deselection
            />
          </label>
        ))}
      </div>
      <p>Selected rating: {rating}</p>
    </div>
  );
}

export default Start;


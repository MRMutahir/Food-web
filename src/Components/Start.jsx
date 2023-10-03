import React from "react";

function Star({ selectedRating, onRatingChange, index }) {
  const handleRatingChange = (newRating) => {
    onRatingChange(index, newRating);
  };

  return (
    <>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <label
            key={value}
            className={`mask mask-star-2 ${value <= selectedRating ? "filled" : ""}`}
            onClick={() => handleRatingChange(value)}
          >
            <input
              type="radio"
              name={`rating-${index}`}
              value={value}
              checked={value === selectedRating}
              onChange={() => {}}
            />
          </label>
        ))}
      </div>
    </>
  );
}

export default Star;


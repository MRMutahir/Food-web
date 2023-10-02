import { useState } from "react";

function Star() {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setSelectedRating(newRating);
  };

  return (
    <>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <label
            key={value}
            className={`mask mask-star-2 ${value <= selectedRating ? "filled" : ""}`}
            onClick={() => handleRatingChange(value)} // Update the selected rating on click
          >
            <input
              type="radio"
              name="rating"
              value={value}
              checked={value === selectedRating} // Check the input when its value matches the selected rating
              onChange={() => {}} // Make onChange a no-op to prevent radio button deselection
            />
          </label>
        ))}
      </div>
      <p>Selected rating: {selectedRating}</p>
    </>
  );
}

export default Star;

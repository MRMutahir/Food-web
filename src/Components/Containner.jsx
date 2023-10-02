import React, { useState } from "react";
import LoadingComponent from "./Loading";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import Star from "./Start";
import "./Containner.css";

const Containner = ({ newArr }) => {
  // console.log(rating);
  const [singleArr, setsingleArr] = useState("");
  const [count, setcount] = useState(0);
  const [alertUser, setalertUser] = useState(false);

  function addSingle(index, e) {
    if (!singleArr.includes(index)) {
      setsingleArr([...singleArr, index, e]);
      setcount(count + 1);
    } else {
      setalertUser(true);
      alert(" this connent is allready select ");
    }
  }
  // console.log(singleArr);
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  console.log(rating);
  return (
    <>
      <Link to="/selectmenu">
        <a
          style={{
            zIndex: "999",
            height: "50px",
            width: "50px",
            left: "97%",
            top: "80px",
            marginTop: "50px",
            borderRadius: "50%",
            background: "red",
            color: "white",
            right: "-30px",
            border: `2px solid white`,
            fontSize: "12px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            position: "fixed",
          }}
        >
          {count} <StoreIcon />
        </a>
      </Link>
      <div className="container main-container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 ">
        {newArr.length !== 0 ? (
          newArr.map((e, index) => (
            <div
              key={index}
              className="card card-compact w-96 bg-base-100 shadow-xl p-4"
            >
              <figure>
                <img
                  src={e.image_url}
                  alt="Shoes"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="rating">
                  {/* Add your star rating logic here */}
                </div>
                <p className="text-xl font-semibold">{e.title}</p>
                <p className="text-gray-600">{e.publisher}</p>
                <div className="card-actions mt-4 flex justify-around">
                  <button
                    className="btn btn-primary"
                    onClick={() => addSingle(index, e)}
                  >
                    Order Now
                  </button>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <label
                        key={value}
                        className={`mask mask-star-2 ${
                          value <= rating ? "filled" : ""
                        }`}
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
              </div>
            </div>
          ))
        ) : (
          <LoadingComponent />
        )}
      </div>
    </>
  );
};

export default Containner;

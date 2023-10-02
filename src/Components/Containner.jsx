import React, { useState } from "react";
import LoadingComponent from "./Loading";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import Star from "./Start";
import "./Containner.css";

const Containner = ({ newArr }) => {
  const [singleArr, setSingleArr] = useState([]);
  const [count, setCount] = useState(0);
  const [alertUser, setAlertUser] = useState(false);

  // Create an array to store ratings for each product
  const [ratings, setRatings] = useState(newArr.map(() => 0));

  function addSingle(index, e, productIndex) {
    if (!singleArr.includes(index)) {
      setSingleArr([...singleArr, index, e]);
      setCount(count + 1);

      // Update the rating for the clicked product
      const newRatings = [...ratings];
      newRatings[productIndex] = e.rating;
      setRatings(newRatings);
    } else {
      setAlertUser(true);
      alert("This content is already selected.");
    }
  }
console.log(singleArr);
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
      <div className="container main-container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
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
                  <Star
                    selectedRating={ratings[index]} // Pass the rating for this product
                    onRatingChange={(newRating) =>
                      addSingle(index, e, index, newRating)
                    }
                  />
                </div>
                <p className="text-xl font-semibold">{e.title}</p>
                <p className="text-gray-600">{e.publisher}</p>
                <div className="card-actions mt-4 flex justify-around">
                  <button
                    className="btn btn-primary"
                    onClick={() => addSingle(index, e, index)}
                  >
                    Order Now
                  </button>
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

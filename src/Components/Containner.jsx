import React, { useState } from "react";
import LoadingComponent from "./Loading";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import Star from "./Start";
import "./Containner.css";

const Containner = ({ newArr }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [alertUser, setAlertUser] = useState(false);

  function addSingle(index, e, newRating) {
    const existingProduct = selectedProducts.find((product) => product.index === index);

    if (!existingProduct) {
      const updatedProducts = [...selectedProducts, { ...e, rating: newRating, index }];
      setSelectedProducts(updatedProducts);
      setCount(count + 1);
    } else {
      setAlertUser(true);
      alert("This content is already selected.");
    }
  }
console.log(selectedProducts);
  return (
    <>
      {/* ... (rest of your code) */}
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
                  selectedRating={selectedProducts.find((product) => product.index === index)?.rating || 0}
                  onRatingChange={(newRating) =>
                    addSingle(index, e, newRating)
                  }
                  index={index}
                />
              </div>
              <p className="text-xl font-semibold">{e.title}</p>
              <p className="text-gray-600">{e.publisher}</p>
              {/* ... (rest of your card content) */}
            </div>
          </div>
        ))
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default Containner;



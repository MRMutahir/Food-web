import React from "react";
import LoadingComponent from "./Loading";

const Containner = ({ newArr }) => {
  // console.log(newArr);
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 ">
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
                  onClick={() => console.log(index, e)}
                >
                  Order Now
                </button>
                {/* <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div> */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default Containner;

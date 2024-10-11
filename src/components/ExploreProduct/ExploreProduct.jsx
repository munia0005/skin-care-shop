import React from "react";
import "./ExploreProduct.css";
import { product_list } from "../../assets/assets";

const ExploreProduct = ({ category, setCategory }) => {
  return (
    <div className="explore-product" id="explore-product">
      <h1>Explore our product</h1>
      <p className="explore-product-text">
        Our bodies tend to lose moisture which makes them dry. We need lotion to
        prevent our skin from becoming flaky and dry. Lotions are a form of
        beauty cream with a lighter texture. When describing lotions, you must
        consider that people need products that enhance their body glow.
      </p>
      <div className="explore-product-list">
        {product_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.product_name ? "All" : item.product_name
                )
              }
              key={index}
              className="explore-product-list-item"
            >
              <img
                className={category === item.product_name ? "active" : ""}
                src={item.product_image}
                alt="image"
              />
              <p>{item.product_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreProduct;

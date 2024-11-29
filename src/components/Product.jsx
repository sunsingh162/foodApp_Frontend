import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addRestaurant } from "../utils/restaurantSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import ProductLists from "./ProductLists";

const Product = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const restaurants = useSelector((store) => store.restaurant);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await axios.get(BASE_URL + "/getRes/" + restaurantId, {
          withCredentials: true,
        });
        dispatch(addRestaurant(res.data));
      } catch (error) {
        console.error("Error fetching restaurant:", error);
      }
    };
    fetchRestaurant();
  }, [restaurantId]);

  const restaurant = restaurants[0];
  return (
    restaurant && (
      <div>
        <div className="restaurant-banner">
          <div className="info-section">
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <div className="details-row">
              <span className="details-icon">&#128231;</span> Minimum Order: ₹{" "}
              {restaurant.min_order}
            </div>
            <div className="details-row">
              <span className="details-icon">&#128653;</span> Delivery in{" "}
              {restaurant.delivery_time}
              Minutes
            </div>
          </div>
          <div className="image-section">
            <img src={restaurant.image} alt="Restaurant food" />
            <div className="rating-box">
              {restaurant.rating}
              <span className="star-icon">
                &#9733;&#9733;&#9733;&#9734;&#9734;
              </span>
              <p className="review-count">1,360 reviews</p>
            </div>
          </div>

          <div className="open-until">&#128337; Open until 3:00 AM</div>
        </div>

        <div className="container">
          <h1>All Offers from McDonald's East London</h1>
          <div className="search-container">
            <input type="text" placeholder="Search from menu..." />
          </div>
        </div>

        <div className="nav">
          <ul>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">Burgers</a>
            </li>
            <li>
              <a href="#">Fries</a>
            </li>
            <li>
              <a href="#">Snacks</a>
            </li>
            <li>
              <a href="#">Salads</a>
            </li>
            <li>
              <a href="#">Cold drinks</a>
            </li>
            <li>
              <a href="#">Happy Meal™</a>
            </li>
            <li>
              <a href="#">Desserts</a>
            </li>
            <li>
              <a href="#">Hot drinks</a>
            </li>
            <li>
              <a href="#">Sauces</a>
            </li>
            <li>
              <a href="#">Orbit®</a>
            </li>
          </ul>
        </div>

        <ProductLists data={restaurant}/>
      </div>
    )
  );
};

export default Product;

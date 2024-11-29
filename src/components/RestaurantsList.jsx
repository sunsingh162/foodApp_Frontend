import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurant } from "../utils/restaurantSlice";
import { Link } from "react-router-dom";

const RestaurantsList = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((store) => store.restaurant);
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const fetchRestaurants = async () => {
    const res = await axios.get(BASE_URL + "/getRes", {
      withCredentials: true,
    });
    dispatch(addRestaurant(res.data));
  };
  return (
    <div className="resList-Container">
      {restaurants.map((res) => (
        <Link to={"/getRes/" + res.restaurantId} key={res._id}>
          <div className="restaurant-card">
            <img src={res.image} alt="res" />
            <div className="card-name">{res.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantsList;

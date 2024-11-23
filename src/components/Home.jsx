import React from "react";
import RestaurantsList from "./RestaurantsList";

const Home = () => {
  return (
    <>
      <div className="banner-container">
        <div className="left-text-section">
          <p>Order Restaurant food, takeaway and groceries.</p>
          <h1>
            Feast your Senses,
            <span className="fast-and-fresh-text">Fast and fresh</span>
          </h1>
          <p>Enter a pincode to see what we deliver</p>
          <div>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
        <div className="image-layout">
          <img
            alt="logo"
            className="top-image"
            src="https://s3-alpha-sig.figma.com/img/69c1/9ac3/5494e7ff1cfc729f9a79cc9dfd357f02?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cZvLzc7M1ooa9yViREbtl9YlE4v5CkyayGJefsMs8GnQKl0syh5Kx~EK3k~Q8lWQpDUd3ngSd77wsQYrEmNCl2wud8pOrkFOVLdMoh6IDNfP6cXa1gIwEzZ0UXm0yyWpM8MCouGvRe83aaBzgiOoReSSNh3fYueJRyx0GzvnaRRc0n6k9NDMlXAoBXp63Bzgmmk3b78NDcAt5nQ1ehok6hYKSSO3k~7FhBIaBuJmFkEzWBzAQy0l1vgIjMKDgjO-McVz6lwTE17SI8C2Qc7ViY8uC9Lw4LnmGq61KTzLy5Z97E8GDU9JpkBHI00D96y3vxSfQcTppDMT2e6YX8KVUw__"
          />
          <img
            alt="logo"
            className="bottom-image"
            src="https://s3-alpha-sig.figma.com/img/e4d6/1c2e/483eae9fed23e712711157b0716dc927?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cQdY9NXi4z68PkUVhqtbi~p4zUqWf~QGaXyQuvsH1wSMoX0MaTjRV7YA8Nq0OtZ4gyRSzbmiPREzwpLESiDFIA5YwaKfwOqbdzzHOy3B~wv1YfF8wx34zrMwvIV-AzSAwBYS7WPUSz6eNSaeJt9pKca1f2JEjdiqNWKKsMPLAIE17kcMurELC8zH46Df90L0cB415AVqwI6sryqnZMkAzzah47Z-eJSz6ikS-kLO7muGg8Y~cpon2ALNGykzsgcT2Cw2jsFaqXA95TtNiSg7BJ4HTFFYRZi3DUGpQr28P1GgmT06EbfBnQuu1DPcuQ0hWbIokA65bjd-mhzxXNkQkA__"
          />
        </div>
      </div>

      <div className="navTitle-container">
        <div className="title-subtitle">
          <h2 className="title">
            Up to -40% <span className="subtitle">Order.uk</span> exclusive deals
          </h2>
        </div>
        <div className="navbar">
          <div className="nav-links">
            <a href="#" className="active">
              Vegan
            </a>
            <a href="#">Sushi</a>
            <a href="#">Pizza & Fast food</a>
            <a href="#">Others</a>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <p className="restaurant-name">Restaurant</p>
            <p>Chef Burgers London</p>
          </div>
          <img src="https://via.placeholder.com/350x200" alt="Chef Burgers" />
          <div className="discount">-40%</div>
        </div>
        <div className="card">
          <div className="card-content">
            <p className="restaurant-name">Restaurant</p>
            <p>Grand Ai Cafe London</p>
          </div>
          <img src="https://via.placeholder.com/350x200" alt="Grand Ai Cafe" />
          <div className="discount">-20%</div>
        </div>
        <div className="card">
          <div className="card-content">
            <p className="restaurant-name">Restaurant</p>
            <p>Butterbrot Caf'e London</p>
          </div>
          <img
            src="https://via.placeholder.com/350x200"
            alt="Butterbrot Cafe"
          />
          <div className="discount">-17%</div>
        </div>
      </div>

      <div className="category-container">
        <div className="category-card">
          <img
            src="https://via.placeholder.com/100"
            alt="Burgers & Fast food"
          />
          <p className="category-name">Burgers & Fast food</p>
          <p className="restaurant-count">21 Restaurants</p>
        </div>
        <div className="category-card">
          <img src="https://via.placeholder.com/100" alt="Salads" />
          <p className="category-name">Salads</p>
          <p className="restaurant-count">32 Restaurants</p>
        </div>
        <div className="category-card">
          <img src="https://via.placeholder.com/100" alt="Pasta & Casuals" />
          <p className="category-name">Pasta & Casuals</p>
          <p className="restaurant-count">4 Restaurants</p>
        </div>
        <div className="category-card">
          <img src="https://via.placeholder.com/100" alt="Pizza" />
          <p className="category-name">Pizza</p>
          <p className="restaurant-count">32 Restaurants</p>
        </div>
        <div className="category-card">
          <img src="https://via.placeholder.com/100" alt="Breakfast" />
          <p className="category-name">Breakfast</p>
          <p className="restaurant-count">4 Restaurants</p>
        </div>
        <div className="category-card">
          <img src="https://via.placeholder.com/100" alt="Soups" />
          <p className="category-name">Soups</p>
          <p className="restaurant-count">32 Restaurants</p>
        </div>
      </div>

        <RestaurantsList />
    </>
  );
};

export default Home;

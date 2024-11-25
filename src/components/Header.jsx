import React from "react";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="left-section">
          <div className="promo">
            <span className="promo-icon">☀️</span> Get 5% Off your first order,{" "}
            <span className="promo-label">Promo: ORDERS</span>
          </div>
          <div className="location">
            <span className="location-icon">📍</span> Regent Street, A4, A4201,
            London{" "}
            <a className="change-location">
              <span className="promo-label">Change Location</span>
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className="cart-button">
            <span className="cart-icon">🛒</span>{" "}
            <span className="mycart-text">My Cart</span>
          </div>
          <div className="user-icon">⬇️</div>
        </div>
      </div>

      <div className="navbar">
        <div className="logo">
          <img
            className="header-logo"
            src="https://s3-alpha-sig.figma.com/img/c323/e614/5fe44fe9aa4ff0011347ab73c5d6358d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oy4PEg3q-kV82AfbHmkKfKm418UHbAjR61Rh3mH9p~RsoHIyBRTZxLyssrOOFQLEQHjQqfqxbA2eZtDbhKtmimbaDFIGeN3MknNaVKjvOgsm60CIDgtChvY6F5SNa~PfcDwzNvhhzUuBoST1BzcRa2qCuGe8SJ7mY~YEhrHFLx9l0ZV4ftOxy9bgo~XZXT2dOCg~SCh3OSZdUSWUo0rruD9qdJgGiwKbgBAo8hNHb3VBecsCUDVuIWTNZM--mDa5KRHxiEH2yX6ZiZ0AUKNX9m6PHFiQIW6XRnfu2~2aopdGjp3LvlXUgQREC0hCrt79koNEsHjJCf82XaGCY0Uobw__"
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <a href="/home" className="active">
            Home
          </a>
          <a href="#" className="active">
            Browse Menu
          </a>
          <a href="#" className="active">
            Special Offers
          </a>
          <a href="#" className="active">
            Restaurants
          </a>
          <a href="#" className="active">
            Track Order
          </a>
        </div>
        <div className="login-signup">
          <span className="login-icon">👤</span> Hey Sunny
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";

const ProductLists = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="prodpage-card-container">
        <div class="prod-page-card">
          <img src="https://via.placeholder.com/496x325" alt="Card Image" />
          <div class="card-text">Your Card Text</div>
        </div>
        <div class="prod-page-card">
          <img src="https://via.placeholder.com/496x325" alt="Card Image" />
          <div class="card-text">Your Card Text</div>
        </div>
        <div class="prod-page-card">
          <img src="https://via.placeholder.com/496x325" alt="Card Image" />
          <div class="card-text">Your Card Text</div>
        </div>
      </div>

      {data.categories.map((category) => (
        <div className="res-itemslist">
          <h1>{category.name}</h1>
          <div className="item-categories-container">
            {category.items.map((item) => (
              <div class="res-item-card-container">                                                                                                                                            
                <div class="card-content item-details">
                  <div class="item-name">{item.name}</div>
                  <div class="item-description">{item.description}</div>
                  <div class="item-price">₹ {item.price}</div>
                </div>
                <div class="card-content item-image">
                  <img src={item.image} alt="Food Image" />
                  <button class="plus-button">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductLists;

import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <div>
        <hr />
      </div>
      <div className="popular-item">
        {data_product.map((item) => (
          <Item key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;

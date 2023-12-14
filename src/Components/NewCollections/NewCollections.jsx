import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <div>
        {" "}
        <hr />{" "}
      </div>
      <div className="collections">
        {new_collection.map((item) => (
          <Item key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;

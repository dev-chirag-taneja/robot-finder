import React from "react";

import CardItem from "./CardItem";

const CardList = ({ filteredItem }) => {
  return (
    <div className="card-list">
      {filteredItem.map((item) => {
        return <CardItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default CardList;

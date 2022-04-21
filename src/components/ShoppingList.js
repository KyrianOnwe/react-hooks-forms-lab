import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [inputedItem, setDesiredItem] = useState("");

  function handleItemSelection(event) {
    setDesiredItem(event.target.value);
  }

  const itemFiltration = items.filter((item) => {
    if (inputedItem === "") return item;
    else if(item.name === inputedItem) return item;
    else return null;

  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleItemSelection} />
      <ul className="Items">
        {itemFiltration.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

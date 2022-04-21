import React from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  /*const [form, changeForm] = useState("");

  function onSearchChange(event){
    changeForm((form) => event.target.value)
    console.log(form)
  }*/

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

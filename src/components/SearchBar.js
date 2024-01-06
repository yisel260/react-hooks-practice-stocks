import React from "react";

function SearchBar({sortAlphabettically,sortByPrice, filterStocks, setFilteredCategory}) {

// function testingOnChange(){
//   console.log("dropdown menu changed")
// }

  //Grab the input and set up conditional if it is NULL hange to to true 
  //set conditional in onChange function -if true run function to update list of 
  //stocks 

        return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={sortAlphabettically}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={sortByPrice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=>setFilteredCategory(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

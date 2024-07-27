
import React from "react";

function SelectMenu({setFilter}) {
  function handleChange(e){
    setFilter(e.target.value)
    
  }
  return (
    <select className="filter-by-region" onChange = {handleChange}>
      <option hidden="">Filter by Region</option>
      <option value="Africa"  >Africa</option>
      <option value="Americas" >America</option>
      <option value="Asia" >Asia</option>
      <option value="Europe" >Europe</option>
      <option value="Oceania" >Oceania</option>
    </select>
  )
 
}
export default SelectMenu


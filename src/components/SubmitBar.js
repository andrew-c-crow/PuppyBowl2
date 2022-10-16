import { React, useState } from "react";
import {Navbar, AllPuppies, DetailButton} from './'


const SubmitBar = (props) => {
  const myPuppies = props.puppyData; 
  
  const [query, setQuery] = useState("");
  console.log(checkQuery())

 







  
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setQuery();
  // };


  return (
    <form>
      <div>
        <div>
        
        </div>
        <h2> name </h2>
        <input type="text" name="name" placeholder="Name..." onChange= {(event) => {setQuery(event.target.value)}}></input>
        <ul className="list">
         {myPuppies.filter((puppy) =>
          puppy.name.toLowerCase().includes(query)
        ).map((puppy) => (
          <li className="listItem" key={puppy.id}>
            {puppy.name}
          </li>
        ))}
      </ul>


      </div>
    </form>
  );


  function checkQuery() {
    if (query === "") {
      return "" 
    } else if (myPuppies.filter(puppy=>puppy.name.toLowerCase().includes(query)))
  { return (myPuppies.filter(puppy=>puppy.name.toLowerCase().includes(query)))}
  console.log(checkQuery())
  
};

};




export default SubmitBar;

// loop through the array of all puppies, extract the name or breed value by saying if theres a key called name, grab the key and compare it to value that has been inputted into the form
//loop and return any that equal that value, store it on state

//piece of state on main that is searched puppies
//looping through the array of all puppies, at each index check does this = id


//onClick has a function that grabs found value
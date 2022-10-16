import { React, useState } from "react";
import { Navbar, AllPuppies, DetailButton } from "./";

const SubmitBar = (props) => {
  const myPuppies = props.puppyData;

  const [query, setQuery] = useState("");
  console.log(checkQuery());

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setQuery();
  // };

  return (
<div className="pupContainer">
      <div>
        <h2> name </h2>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        ></input>

          

          {myPuppies
            .filter((puppy) => puppy.name.toLowerCase().includes(query))
            .map((puppy) => (
              
              
              <div key={`player-${puppy.id}`} className="pup">
                <div className="pupName">
                  
                  <span>{puppy.name}</span> <span>{puppy.id}</span>
                </div>
                <div>
                 
                  <img className="pupImage" src={puppy.imageUrl}></img>
                </div>
                <div className="pupBreed">{puppy.breed}</div>
                <div className="pupStatus"> {puppy.status}</div>
                <div className="pupId"> {puppy.id} </div>
                <DetailButton
                  puppy={puppy}
                  getPuppy={props.getPuppy}
                  clickedPuppy={props.clickedPuppy}
                />
              </div>
            
              // <li className="listItem" key={puppy.id}>
              //   {puppy.name}
              //   {puppy.breed}

              // </li>
            ))}
        </div>
      </div>
  );

  function checkQuery() {
    if (query === "") {
      return "";
    } else if (
      myPuppies.filter((puppy) => puppy.name.toLowerCase().includes(query))
    ) {
      return myPuppies.filter((puppy) =>
        puppy.name.toLowerCase().includes(query)
      );
    }
    console.log(checkQuery());
  }
};

export default SubmitBar;

// loop through the array of all puppies, extract the name or breed value by saying if theres a key called name, grab the key and compare it to value that has been inputted into the form
//loop and return any that equal that value, store it on state

//piece of state on main that is searched puppies
//looping through the array of all puppies, at each index check does this = id

//onClick has a function that grabs found value

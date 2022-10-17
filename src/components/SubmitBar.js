import { React, useState } from "react";
import { Navbar, AllPuppies, DetailButton } from "./";

const SubmitBar = (props) => {
  const myPuppies = props.puppyData;

  const [query, setQuery] = useState("");
  // console.log(checkQuery());
  console.log(query);

  return (
    <div>
      <div className= "heading">
      <h1 className="PuppyBowl">Puppy Bowl!</h1>
      <h2 className="PuppyBowl"> Search by Name </h2>
      <input
      className="input"
        type="text"
        name="name"
        placeholder="Name..."
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      ></input>
      </div>
      <div className="pupContainer">
        {myPuppies
          .filter((puppy) => puppy.name.toLowerCase().includes(query.toLowerCase()))
          .map((puppy) => (
            <div key={`player-${puppy.id}`} className="pup">
              <div className="pupName">
                <span>Name: {puppy.name}</span> <span>ID: {puppy.id}</span>
              </div>
              <div>
                <img className="pupImage" src={puppy.imageUrl}></img>
              </div>
              {/* <div className="pupBreed">{puppy.breed}</div>
              <div className="pupStatus"> {puppy.status}</div>
              <div className="pupId"> {puppy.id} </div> */}
              <DetailButton
                puppy={puppy}
                getPuppy={props.getPuppy}
                clickedPuppy={props.clickedPuppy}
              />
            </div>
          ))}
      </div>
    </div>
  );

  // function checkQuery() {
  //   if (query === "") {
  //     return "";
  //   } else if (
  //     myPuppies.filter((puppy) => puppy.name.toLowerCase().includes(query))
  //   ) {
  //     return myPuppies.filter((puppy) =>
  //       puppy.name.toLowerCase().includes(query)
  //     );
  //   }
  //   console.log(checkQuery());
  // }
};

export default SubmitBar;

// loop through the array of all puppies, extract the name or breed value by saying if theres a key called name, grab the key and compare it to value that has been inputted into the form
//loop and return any that equal that value, store it on state

//piece of state on main that is searched puppies
//looping through the array of all puppies, at each index check does this = id

//onClick has a function that grabs found value

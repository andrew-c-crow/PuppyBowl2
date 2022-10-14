import { React, useState } from "react";

const SubmitBar = (props) => {

  const [foundValue, setFoundValue] = useState('');

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setFoundValue();
  // };

  return (
    <form>
      <div>
        <div>
          <h3>Name</h3>
        </div>
        <input type="text" name="name" placeholder="Name" onChange= {(event) => {setFoundValue(event.target.value)}}></input>
        <button onClick>
          <h3>Submit</h3>
        </button>
      </div>
    </form>
  );
};

export default SubmitBar;

// loop through the array of all puppies, extract the name or breed value by saying if theres a key called name, grab the key and compare it to value that has been inputted into the form
//loop and return any that equal that value, store it on state

//piece of state on main that is searched puppies
//looping through the array of all puppies, at each index check does this = id


//onClick has a function that grabs found value
import React, {useState, useEffect} from "react";
import {Navbar} from "./"
const Main = () => {
 
const [puppies, setPuppies] = useState([])

const getPuppies = async () => {

  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-et-web-ft/players');
  const puppies = await response.json();
  setPuppies(puppies);

}

const [searchedPuppy, setSearchedPuppy] = useState ({})
const postPuppy = async (playerId) => {
const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-et-web-ft/players${playerId}`)


}

 
 
 
return (
    <div id="main">
   <Navbar/>
   
  </div>
  );
};

export default Main;


// components 
// search bar on nav bar component which corresponds to name and breed of puppy and submit button that works for both or either (maybe if else or ternary)
// see details which fetches the api data for each puppy
 //we need useState and useEffect for selecting a puppy or searching it
// delete from roster button which removes them from the roster
// store roster in an array of objects
// it will find name and 
// SinglePuppy = all puppy json information
// will need a fetch and useState 
// in POST fetch method, use a dynamic variable to correlate with breed/name
// standard fetch function is automatically using 'GET'
// 'GET'-retrieve info on puppy 'POST' -create new info 'PUT' -to update an existing user 'DELETE' -deleting user
//  fetch is just a function to interact with database
// database is like a town with different addresses 
// main 'get' request, call this function when you render main page (map over), store fetched value in return statement
// if someone clicks on the image, make it display just that one puppy, which is a separate fetch request using the ID of that puppy
//need to build in functionality which will let you build a new puppy
//type in a name and breed on submit, on submit will use a fetch 'POST' function to grab the data that was submitted, and add
//this to the database
//get request to get 
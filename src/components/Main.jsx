import React, { useState, useEffect } from "react";
import { Navbar, AllPuppies } from "./";

const Main = () => {
  const [puppyData, setPuppyData] = useState([]);

  useEffect(() => {
    const getPuppyData = async () => {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-et-web-ft/players"
      );
      const result = await response.json();
      const puppies = result.data.players;
      setPuppyData(puppies);
    };
    getPuppyData();
  }, []);

  const [clickedPuppy, setClickedPuppy] = useState({});

  const getPuppy = async (playersId) => {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-et-web-ft/players/${playersId}`
    );
    const result = await response.json();
    const puppy = result.data.player;
    setClickedPuppy(puppy);
    console.log(puppy);
  };


  return (
    <div id="main">
      <Navbar />
      <AllPuppies puppyData={puppyData} />
      {/* <DetailButton getPuppy = {getPuppy} /> */}
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

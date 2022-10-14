import React from "react";
import {DetailButton} from "./";
import {SinglePuppy} from "./";

const AllPuppies = (props) => {
  const myPuppies = props.puppyData;
  ;
  return (
    <div className="puppyContainer">
      {myPuppies.length ? (
        myPuppies.map((puppy) => {
          return (
            <div key={`player-${puppy.id}`} className="puppy">
              <div className= "puppyName"> <span>{puppy.name}</span> <span>{puppy.id}</span></div>
              <div> <img className= 'puppyImage' src={puppy.imageUrl}></img></div>
              <div className= "puppyBreed">{puppy.breed}</div>
              <div className= "puppyStatus"> {puppy.status}</div>
              <div className= "puppyId"> {puppy.id} </div>
              <DetailButton puppy={puppy} getPuppy = {props.getPuppy} clickedPuppy={props.clickedPuppy} />
              

            </div>
          );
        })
      ) : (
        <div>Loading the Cutest Puppies</div>
      )}
    </div>
  );
};

export default AllPuppies;

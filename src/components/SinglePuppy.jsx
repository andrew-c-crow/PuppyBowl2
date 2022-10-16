import React from "react";
import { AllPuppies, SubmitBar } from "./";

const SinglePuppy = (props) => {
  return (
    <div className="puppy">
      <div className="puppyInfo">
        <div>
          <img className="puppyImage" src={props.clickedPuppy.imageUrl}></img>
        </div>
        <div className="puppyBreed">{props.clickedPuppy.breed}</div>
        <div className="puppyStatus"> {props.clickedPuppy.status}</div>
        <div className="puppyId"> {props.clickedPuppy.id} </div>

        <button onClick={props.setClickedPuppy}> go back</button>
      </div>
    </div>
  );
};

export default SinglePuppy;

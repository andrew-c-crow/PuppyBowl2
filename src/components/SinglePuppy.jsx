import React from "react";
import { AllPuppies, SubmitBar } from "./";

const SinglePuppy = (props) => {
  return (
    <div className="singlePuppy">
      <div className="puppyInfo">
        <div className="singleName">{props.clickedPuppy.name}</div>
        <div>
          <img className="puppyImage" src={props.clickedPuppy.imageUrl}></img>
        </div>
        <div className="puppyBreed">{props.clickedPuppy.breed}</div>
        <div className="puppyStatus"> {props.clickedPuppy.status}</div>
        <div className="puppyId"> {props.clickedPuppy.id} </div>

        <button className="goBack" onClick={props.setClickedPuppy}> Go Back</button>
      </div>
    </div>
  );
};

export default SinglePuppy;

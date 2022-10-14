import React from "react";
import {AllPuppies} from './'


const SinglePuppy = (props) => {

console.log (props)

    return (
    <div  className="puppy">
                <div className="puppyInfo">
                <div className= "puppyBreed">{props.clickedPuppy.breed}</div>
              <div className= "puppyStatus"> {props.clickedPuppy.status}</div>
              <div className= "puppyId"> {props.clickedPuppy.id} </div>

             
              <button onClick={props.setClickedPuppy}> go back</button>
              </div>
              </div>
            
    
)

}














export default SinglePuppy
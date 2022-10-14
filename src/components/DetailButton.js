import React from 'react'


const DetailButton = (props)=>{

  

return (
<button onClick= {()=> {props.getPuppy(props.puppy.id)}} className='detailButton'>See details
<div> hello </div>


</button>) 
}







export default DetailButton
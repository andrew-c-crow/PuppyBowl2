import React from 'react'
import SinglePuppy from './SinglePuppy'


const DetailButton = (props)=>{

  

return (
<button onClick= {()=> {props.getPuppy(props.puppy.id)}} className='detailButton'> See Details 

</button>) 
}







export default DetailButton
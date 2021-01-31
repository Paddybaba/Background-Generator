import React, { useEffect } from 'react'

const Ranker = ({userdata}) =>{
    console.log("below ranker: ",userdata);
    return(
        <div  className="container tc">
        <div>
             <p className="f4">Welcome ,{userdata.username}</p>
        </div> 
        <div>
             <p>You have made :  {userdata.entries} entries</p>
             <p className="blink">Enter an image URL in the box below and click mark the face !!!</p>
         </div>
         
     </div>
     )       
        
}
export default Ranker;
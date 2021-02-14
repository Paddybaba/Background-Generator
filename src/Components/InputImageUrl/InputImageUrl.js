import React from 'react'
import './InputImageUrl.css';

const InputImageUrl = ({changeUrl,removeBox,onURLSubmit,user,getUserDetails}) =>{
    
    async function onButtonClick(){
       
        onURLSubmit()
            
        const response  = await fetch("http://59.95.82.80/image",{
            method:'put',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(user)
        });
        const data = await response.json();
        console.log(data.user);
        if(data.result === 'success') getUserDetails(data.user);
        else {alert("Error occured !!!") }
    }
    return(
        <div className="container1">        
            <div className="tc  br3 shadow-3 pa2  container2">
            <input type="text" placeholder="enter Url here !!!" onChange={(event)=>
                {
                    changeUrl(event.target.value)
                    removeBox();
                }
                    }></input>
            <button     className="grow ma2  pv2  ph1  dib  white bg-purple" 
                        onClick={onButtonClick}>Mark the Face</button>
            </div>
        </div>

    )
}

export default InputImageUrl;
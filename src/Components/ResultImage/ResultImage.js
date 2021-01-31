import React from 'react'
import './ResultImage.css'

const ResultImage = ({imageUrl}) =>
{
    return(
        <div className="container_a">
            <div  id="imagediv" className="shadow-3  br3  ma4  container_b">
                <img id="inputImage" alt="demo" src={imageUrl}/>
                {/* <div className="imagebox" ></div> */}
            </div>
        </div>
    )
}
export default ResultImage;
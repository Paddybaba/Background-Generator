import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import image from './loader.gif'
const Logo = () => {
   return (
   <div className="logo  ma3" >
            <Tilt className="Tilt  br2  shadow-3 " options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                  <div className="Tilt-inner bo2">
                      <img alt="LOGO" src={image}/>
                  </div>
            </Tilt>
    </div>
    );
}
export default Logo;
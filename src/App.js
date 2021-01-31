import React, {useEffect, useState} from 'react'
import './App.css';
import Logo from './Components/Logo/Logo'
import Login from './Components/Login/Login'
import InputImageUrl from './Components/InputImageUrl/InputImageUrl'
import ResultImage from './Components/ResultImage/ResultImage'
import Ranker from './Components/Ranker/Ranker'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Signin from './Components/SigninForm/Signin'
import Signup from './Components/SignUpForm/SignUp'

const particlespecs = {
  number: {
          value:150,
          density :{
               enable:true,
               value_area: 1000
          }
          }
      }

 const app = new Clarifai.App ({
   apiKey:'9d5ff9359cf642a596da61892dcd6d4a'
 });   
    
function App() {
      const[url, setUrl]=useState("https://images.indianexpress.com/2017/07/captain-vikram-batra.jpg");
      const [faceBox, setfacebox]=useState();
      const [route, changeRoute]=useState("signin")
      const [currentuser, updateUser]=useState({iduser:"", username:"demouser", email:"",mobilenumber:9876543210, joined:new Date(),entries:0}); 
  
      const grabFaceBox = (clarifaiData) =>
      {
          const image = document.getElementById("inputImage")
          const imageBox = document.getElementById("imagediv")
          const [width,height] = [image.width,image.height];
          var [boxHeight, boxWidth]=[Math.round(height*clarifaiData.bottom_row - height*clarifaiData.top_row) , Math.round(width*clarifaiData.right_col - width*clarifaiData.left_col) ];
          // Create box for face
          var face_box = document.createElement("div",{id:"box_img", className:"imagebox"});
          face_box.id = "box_img"
          face_box.className="imagebox" 
          face_box.style.height = boxHeight+"px";
          face_box.style.width = boxWidth+"px";
          face_box.style.top = Math.round(height*clarifaiData.top_row)+"px";
          face_box.style.left = Math.round(width*clarifaiData.left_col)+"px";
          imageBox.appendChild(face_box);
          // console.log(clarifaiData, width , height , boxHeight , boxWidth);
      }
      const removeBox = () =>{
        const x = document.getElementById("box_img");
        const y = document.getElementById("imagediv");
        if(x != null){
        y.removeChild(x);
        }
        }
    

  const onURLSubmit = () =>{    
    ///////////////////////////// Create input for Clarifai API  
    app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
    .then(faceModel => {
      return faceModel.predict(url);
    })
    .then(response => grabFaceBox(response.outputs[0].data.regions[0].region_info.bounding_box))
    .catch(err => console.log("This error occured", err))
  }
  const onSigninClick = () =>
  {
    
    // console.log(route,"this is current route");
    changeRoute("home");
  }
  const onLogoutClick = () =>
  {
    console.log("log out clicked, changing route to signin");
    changeRoute('signin')
  }
  const onSignupClick=()=>
  {
    console.log("signup clicked, changing route to signup");
    changeRoute('signup')
  }
  const existingUser = () =>
  {
    changeRoute('signin')
  }
////// Get userDetails from Child (Signin form to Parent)
  const getUserDetails =(user)=>{
        updateUser(user);
  }

  /////////////////////////   CONDITIONAL RENDERING OF COMPONENTS /////////////////////////////////////////////////////////
 
  if (route==='signin')
  {
  return (
    <div className="tc App">
        <Particles className="particles"
          params={particlespecs}/>    
        <Logo/>
        <Signin onSigninClick={onSigninClick} onSignupClick={onSignupClick} getUserDetails={getUserDetails}/>
    </div> )
  }
  if (route==='signup')
  {
  return (
    <div className="tc App">
        <Particles className="particles"
          params={particlespecs}/>    
        <Logo/>
        <Signup onSigninClick={onSigninClick} existingUser={existingUser} getUserDetails={getUserDetails}/>
    </div> )
  }
  else if(route==='home') {     
    return( 
      <div className="tc">
      <div className='App'>
          <Logo/>
          <p className="f2 title ">FACE identifier</p>
          <Login onLogoutClick={onLogoutClick}/>
        </div>
          <Ranker userdata={currentuser}/>
          <InputImageUrl 
          changeUrl={setUrl}
              removeBox = {removeBox}
              onURLSubmit={onURLSubmit}
              user={currentuser}
              getUserDetails={getUserDetails}
            />
          <ResultImage imageUrl={url} />
        </div>);}
}
export default App;

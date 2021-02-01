import React, { useEffect, useState } from 'react'


const Signin = ({onSigninClick, onSignupClick, getUserDetails}) =>
{
    const [em , updateEmail] = useState("");
    const [pwd, updatepwd] = useState("");
    const [myCheckBox, updatemyCheckBox]=useState(document.getElementById("checkbox"));

    useEffect(()=>{
        updatemyCheckBox(document.getElementById("checkbox"));
        console.log(localStorage.getItem("em"));
        document.getElementById("email-address").value = localStorage.getItem("em");
        updateEmail(localStorage.getItem("em"))
        document.getElementById("password").value = localStorage.getItem("pass");
        updatepwd(localStorage.getItem("pass"))
    
    },[])
    function onCheck(){
        console.log(myCheckBox.checked);
        if(myCheckBox.checked){
            localStorage.setItem("em",em);
            localStorage.setItem("pass",pwd)
        }
    }
    
    async function onSigninPress(){
        const response = await fetch('https://rocky-brook-47878.herokuapp.com/signin',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                email:em,
                password:pwd
            })
        });
        const data = await response.json();
        console.log(data);
        if(data.message === "success")
        {
            console.log(data.user);
            alert("login successful")
            onSigninClick();
            getUserDetails(data.user);
            
        }else if (data.message ==="failed"){
            alert("invalid credentials !!!")
        }
    }
    
    return(
        <div className="pa4 black-80 shadow-3 ma5">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                     <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                        <div className="mt3"> 
                            <label className=" db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input  className="shadow-3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address" 
                                    onChange={e=>{updateEmail(e.target.value)}} 
                                    id="email-address"></input>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input  className="shadow-3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"
                                    onChange={e=>{updatepwd(e.target.value)}}  
                                    id="password"></input>
                        </div>
                                                          
                           
            </fieldset>
                        <div className="">
                            <input  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    onClick={onSigninPress}
                                    value="Sign in"></input>
                        </div>
                        <div className="lh-copy mt3">
                            <div className="flex  items-center">                                
                                        <input      
                                            id="checkbox"
                                            value="true"
                                            type={"checkbox"}
                                           
                                            onClick={onCheck}

                                        ></input>
                                
                                <p className="ml3">    Remember Me</p>
                            </div>
                            <a href="#0" onClick={onSignupClick} className="f6 link dim black db">New User? Sign up</a>
                            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                        </div>
             </div>
</div> )


}

export default Signin;
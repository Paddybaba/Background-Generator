import React, { useState } from 'react'

const Signup = ({onSigninClick, existingUser,getUserDetails}) =>
{
    const [username,updateName]=useState("");
    const [phone, updatePhone]=useState("");
    const [emailaddress, updateEmail] = useState("");
    const [userPassword, updatePassword] = useState("");


    async function onSignupClick(){
        const data = {
                email:emailaddress,
                username:username,
                password:userPassword,
                phoneNumber : phone
        }
        const resposne = await fetch("http://localhost:3000/signup",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)       
        })
        const datareceived = await resposne.json();
        if(datareceived.message === 'success'){
            alert (datareceived.user.username + " Successfully registered \n Press OK to proceed")
            onSigninClick();
            const loggedUser = datareceived.user ;
            // {
            //     username:datareceived.user.username, 
            //     email:datareceived.user.emailaddress,
            //     entries:0,
            //     phone:datareceived.user.mobilenumber, 
            //     joined:new Date()
            // }
            console.log(loggedUser);
            getUserDetails(loggedUser);
        }else{
             alert(datareceived.user+" Try again")   
        }
    }


    return(
        <div className="pa4 black-80 shadow-3 ma6">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">New User Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Name</label>
                            <input  className="shadow-3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="username"  
                                    id="username"
                                    onChange = {e => updateName(e.target.value)}
                                    />
                          
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Phone number</label>
                            <input  className="shadow-3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="number" 
                                    name="phonenumber"  
                                    id="phonenumber"
                                    onChange = {e => updatePhone(e.target.value)}/> 
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Email</label>
                            <input  className="shadow-3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange = {e => updateEmail(e.target.value)}
                                />
                        </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Password</label>
                        <input  className="shadow-3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange = {e => updatePassword(e.target.value)}
                            />
                    </div>
                
                </fieldset>
                    <div className="">
                        <input onClick={onSignupClick} className="shadow-3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up"></input>
                    </div>
                    <div className="lh-copy mt3">
                        <a onClick={existingUser}href="#0" className="f6 link dim black db">Existing user , Sign In</a>
                        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                    </div>
            </div>
        </div>

    )
}

export default Signup;
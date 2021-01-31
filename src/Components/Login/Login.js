import React from 'react'
import './Login.css'

const Login = ({onLogoutClick}) => {
    return(
        <nav>
            <p onClick={onLogoutClick}className='pa2 ma1 link pointer underline'>SIGN OUT</p>
        </nav>
    )
}
export default Login;
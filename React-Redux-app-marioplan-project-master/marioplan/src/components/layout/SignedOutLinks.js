import React from 'react'
import {NavLink} from 'react-router-dom'

const SignOutLinks = () => {
    return (
        <div>
            <ul className = "right">
                <li><NavLink to='/SignUp'>Signup</NavLink></li>
                <li><NavLink to='/SignIn'>Login</NavLink></li>
            </ul>
        </div>
        
    )
}
export default SignOutLinks
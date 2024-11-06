import React, { useEffect } from 'react'
import LoginForm from '../components/auth/LoginForm'
import './../styles/auth.css'
import SwitchLanguage from '../components/common/SwitchLanguage'

const Login = () => {
    useEffect(() => {
        document.body.style.direction = localStorage.getItem("direction");
    }, []);
    return (
        <div className='login-container'>
            <div className='switch-language-container'>
                <SwitchLanguage handleDirection={() => {
                    if (localStorage.getItem("direction") === "rtl") {
                        localStorage.setItem("direction", "ltr");
                        document.body.style.direction = "ltr";
                    } else {
                        localStorage.setItem("direction", "rtl");
                        document.body.style.direction = "rtl";
                    }
                }} />
            </div>

            <LoginForm />
        </div>
    )
}

export default Login

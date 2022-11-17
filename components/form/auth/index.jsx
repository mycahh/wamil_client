'use client'
import { useState } from 'react'
import ModalComponent from "../../modals/modalComponent"
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function LoginComponent({setIsOpen, isOpen}) {

    const [isLogin, setIsLogin] = useState(true)


    function goToRegister(e) {
        e.preventDefault()
        setIsLogin(!isLogin)
    }

    return (
        <ModalComponent setIsOpen={setIsOpen} isOpen={isOpen} isLogin={isLogin}>
            {isLogin ? <LoginForm goToRegister={goToRegister}/> : <RegisterForm goToRegister={goToRegister}/>}
        </ModalComponent>
    )
}
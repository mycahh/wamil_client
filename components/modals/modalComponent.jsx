'use client'
import Image from "next/image"

export default function modalComponent({ children, setIsOpen, isOpen, isLogin }) {
    return (
        <div className={`modal ${isOpen ? 'modal--open' : ''}`} >
            <div className={`modal_content ${isLogin ? 'width_login' : 'width_register'}`}>
                <span className="close" onClick={() => {setIsOpen(false)}}>❌</span>
                <div className="modal_title">
                    <Image src="/Logo.png" width={100} height={100} />
                    <h1>{isLogin ? 'Iniciar sesión': 'Registro'}</h1>
                </div>
                {children}
            </div>
        </div>
    )
}
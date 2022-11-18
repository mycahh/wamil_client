'use client'

export default function modalComponent({ children, setIsOpen, isOpen, isLogin }) {
    return (
        <div className={`modal ${isOpen ? 'modal--open' : ''}`} >
            <div className={`modal_content ${isLogin ? 'width_login' : 'width_register'}`}>
                <span className="close" onClick={() => {setIsOpen(false)}}>❌</span>
                <div className="modal_title">
                    <h1>{isLogin ? 'Iniciar sesión': 'Registro'}</h1>
                </div>
                {children}
            </div>
        </div>
    )
}
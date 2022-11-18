'use client'

export default function modalComponent({ children,  isOpen, class_name }) {
    return (
        <div className={`modal modal--open s${isOpen ? 'modal--open' : ''}`} >
            <div className={`modal-content ${class_name}`}>
                <span className="close" onClick={() => {setIsOpen(false)}}>❌</span>
                {children}
            </div>
        </div>
    )
}
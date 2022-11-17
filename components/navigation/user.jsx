'use client'
import { useState } from 'react'

import Image from 'next/image'
import LoginComponent from '../form/auth'

export default function UserButton() {
    const[isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div class="user_button navbar__user" onClick={() => setIsOpen(true)}>
                <Image src="/Usuario.svg" width={28} height={28} alt="usuario icon" />
                <p>Identíficate</p>
            </div>
            <LoginComponent setIsOpen={setIsOpen} isOpen={isOpen}/>
        </>
    )
}
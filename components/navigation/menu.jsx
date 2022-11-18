import Link from "next/link"

export default function CollectionMenu() {
    
    return(
        <div>
            <Link href="/">Home</Link>
            <Link href="/libros">Libros</Link>
            <Link href="/autores">Autores</Link>
        </div>
    )
}
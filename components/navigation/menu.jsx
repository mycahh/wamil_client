import Link from "next/link"

export default function CollectionMenu() {
    
    return(
        <div>
            <Link href="Libros">Libros</Link>
            <Link href="Autores">Autores</Link>
            <Link href="Géneros">Géneros</Link>
        </div>
    )
}
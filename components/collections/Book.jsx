import Image from "next/image"
import Link from "next/link"

export default function Book({ titulo, autor, portada_url }) {

    
    return (
        <div className="card">
            <Link href={`/libros/${titulo}`}>
                <Image src="/portadas/unmundofeliz.webp" width={177} height={266} />
                <h3>{titulo}</h3>
                <p>{autor}</p>
            </Link>
        </div>
    )
}
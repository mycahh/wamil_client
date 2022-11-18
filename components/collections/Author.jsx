import Image from "next/image"
import Link from "next/link"

export default function Author({ autor }) {

    return (
        <div className="card card_author">
            <Image src="/portadas/unmundofeliz.webp" width={177} height={266} />
            <p>{autor}</p>
            <div>
                <Link href="/autores/aldous-huxley" className="btn-ficha">Ver Ficha</Link>
            </div>
        </div>
    )
}
import Link from "next/link"
import Book from "./Book"

export default function CollectionCategory() {

    const book = { portada_url: '/portadas_libros/unmundofeliz.webp', autor: 'Aldous Huxley', titulo: 'Un mundo feliz' }
    const { titulo, autor, portada_url } = book

    return (
        <div className="collection_category">
            <Link href="/genero/distopia" className="category_text">
                <p>Distopia</p>
                <span className="category_more">Ver mas</span>
            </Link>
            <hr />
            <div className="collection_books">
                <Book portada_url={portada_url} titulo={titulo} autor={autor} />
                <Book portada_url={portada_url} titulo={titulo} autor={autor} />
                <Book portada_url={portada_url} titulo={titulo} autor={autor} />
                <Book portada_url={portada_url} titulo={titulo} autor={autor} />
                <Book portada_url={portada_url} titulo={titulo} autor={autor} />
            </div>
        </div>
    )
}
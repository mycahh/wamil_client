import AsideItem from "./AsideItem"

export default function AsideAdmin() {

    return(
        <aside>
            <h1>Admin</h1>
            <AsideItem opcion="Libros" />
            <AsideItem opcion="Autores" />
            <AsideItem opcion="Generos" />
        </aside>
    )
}
export default function FormBook() {
    return (
        <form action="" className="grid">
            <div class="group-form">
                <label htmlFor="">Titulo: </label>
                <input type="text" placeholder="Coloque el nombre del libro" />
            </div>
            <div class="group-form">
                <label htmlFor="">Autor: </label>
                <div className="submenu">
                    <input type="text" placeholder="Coloque el nombre del autor" list="autores" />
                    <datalist id="autores">
                        <option value="Aldous Huxley">Aldous Huxley</option>
                        <option value="Sheakpeare">Sheakpeare</option>
                    </datalist>
                </div>
            </div>
            <div class="group-form">
                <label htmlFor="">Genero: </label>
                <input type="text" placeholder="Coloque el nombre del genero" list="generos" />
                <datalist id="generos">
                    <option value="Distopía">Distopía</option>
                    <option value="Drama">Drama</option>
                </datalist>
            </div>

            <div className="file__book">
                <label>Imagen: </label>
                <input type="file" className="file__book" />
            </div>

            <div className="file__desc">
                <label>Descripción: </label>
                <textarea type="textarea" className="form" />
            </div>
        </form>
    )
}
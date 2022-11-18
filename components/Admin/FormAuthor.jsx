export default function FormAuthor() {

    return (
        <form action="" className="grid">
            <div class="group-form">
                <label htmlFor="">Nombre: </label>
                <input type="text" placeholder="Coloque el nombre del autor" />
            </div>
            <div class="group-form">
                <label htmlFor="">Apellido: </label>
                <div className="submenu">
                    <input type="text" placeholder="Coloque el Apellido del autor" />
                </div>
            </div>
            <div className="file__desc">
                <label>Biografía: </label>
                <textarea type="textarea" className="form" />
            </div>
            <div className="file__book">
                <label>Foto: </label>
                <input type="file" className="file__book" />
            </div>
        </form>
    )
}
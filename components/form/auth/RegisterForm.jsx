export default function RegisterForm({ goToRegister }) {
    return (
        <form className="register_form">
            <div className="fields">
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Correo Electrónico</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Confirmar contraseña</label>
                    <input type="text" />
                </div>
            </div>
            <div class="genders">
                <p>
                    Género:
                    <select name="genero">
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Prefiero No decirlo</option>
                    </select>
                </p>
            </div>
            <input type="submit" value="Registrar" />
            <a href="/login" onClick={(e) => goToRegister(e)}>¿Ya tienes una Cuenta?</a>

        </form>
    )
}
export default function LoginForm({goToRegister}) {
    return (
        <form>
            <div>
                <label htmlFor="">Correo</label>
                <input type="text" placeholder="Ingresa tu correo eléctronico" />
            </div>
            <div>
                <label htmlFor="">Contraseña</label>
                <input type="text" placeholder="Ingresa tu contraseña" />
            </div>
            <input type="submit" value="Registrar" />
            <a href="/register" onClick={(e) => goToRegister(e)}>¿No tienes una Cuenta?</a>
        </form>
    )
}
import style from "./header.module.css"

function Header() {
    return (
            <header className={style.header_container}>
                <h1 className={style.principal_title}>¡En venta casa en Guápulo!</h1>
                <a href="#form-section">
                    <button className={style.button_llamada}>
                        Recibir llamada
                    </button>
                </a>
            </header>
    )
}

export default Header;
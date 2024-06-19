import style from "/public/header/header_style.css"
function Header() {
    return (
            <header className="header_container">
                <h1 className="principal_title">¡En venta casa en Guápulo!</h1>
                <button className={style.button_llamada}>Recibir LLamada</button>
            </header>
    )
}

export default Header;
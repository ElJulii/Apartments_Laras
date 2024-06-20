import style from "./footer.module.css"
function Footer() {
    return (
        <footer>
            <div className={style.contacts}>
                <p>Contactos de Apartamento: </p>
                <ul>
                    <li>Gladys Ramon</li>
                    <li>Rodrigo Lara</li>
                    <li>Lara</li>
                </ul>
            </div>

            <div className={style.rights}>
                <p>Derechos:</p>
                <p>Julian Lara</p>
            </div>

            <div className={style.programmer_info}>
                <p>Programmer Social Networks: </p>
                <ul>
                    <li>Facebook</li>
                    <li>Intagram</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </footer>


    )
}

export default Footer;
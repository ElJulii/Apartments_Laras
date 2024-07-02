import style from "./Contacts.module.css"
import wa from "../icons/whatsapp-line.png"
function Contacts() {
    return(
        <div className={style.contacts_container}>

            <h2 className={style.contacts_text}>Contactos</h2>
            <div className={style.contacts}>

                <div>
                    <a href="https://wa.me/593995778774" target="_blank" rel="noreferrer"> Lenin Lara <img src={wa} alt="whats"/> </a>
                    <p>+593 995778774</p>
                </div>

                <div>
                    <a href="https://wa.me/593998744102" target="_blank" rel="noreferrer"> Gladys Ramón <img src={wa} alt="whats"/> </a>
                    <p>+593 998744102</p>
                </div>

                <div>
                    <a href="https://wa.me/593999817726" target="_blank" rel="noreferrer"> Rodrigo Lara <img src={wa} alt="whats"/> </a>
                    <p>+593 999817726</p>
                </div>

            </div>

        </div>
    )
}
export default Contacts;
import style from "./footer.module.css"
function Footer() {
    return (
        <footer>
            <div className={style.footer_links}>
                <a href="https://docs.google.com/document/d/1lp4TbWWZcHFVzUPvao_KcizaeLj0SEFAGFusNlEYHeU/edit?usp=sharing" target="_blank" className={style.footer_link}>
                    Política de Privacidad
                </a>
                <a href="https://docs.google.com/document/d/11We1rGDydsttOzGBYT4kD9zpvvs5BkUlkoUa_LWC70o/edit?usp=sharing" target="_blank" className={style.footer_link}>
                    Términos y Condiciones
                </a>
            </div>
            <div className={style.social_media}>
                <a href="https://www.instagram.com/el_julii28/" target="_blank" className={style.social_icon}>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                </a>
                <a href="https://www.facebook.com/juligamerXD2003" target="_blank" className={style.social_icon}>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                </a>
                <a href="https://github.com/ElJulii" target="_blank" className={style.social_icon}>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/github--v1.png" alt="github--v1"/>
                </a>
                <a href="https://web.telegram.org/k/#@ElJulii28" target="_blank" className={style.social_icon}>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/telegram-app--v1.png" alt="telegram-app--v1"/>
                </a>
            </div>
            <div className={style.footer_copyright}>
                <p>&copy; 2024 Julian Mateo Lara Ramón. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;
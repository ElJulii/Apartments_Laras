import image_uno from "../album/album_uno/imagen_uno.jpg"
import image_dos from "../album/album_uno/foto_dos.jpg"
import image_three from "../album/album_uno/foto_tres.jpg"
import image_four from "../album/album_uno/foto_cuatro.jpg"
import image_five from "../album/album_uno/foto_cinco.jpg"
import style from "./Album.module.css"
function Album () {
    return (
        <div className={style.gallery_set}>
            <div className={style.one_img}>
                <img className={style.home_img} src={image_uno} alt="home"/>
            </div>
            <div className={style.four_imgs}>
                <img className={style.imgs_set} src={image_dos}/>
                <img className={style.imgs_set} src={image_three}/>
                <img className={style.imgs_set} src={image_four}/>
                <img className={style.imgs_set} src={image_five}/>
                <div className={style.overlay}>
                    <div className={style.overlay_text}>EN GUAPULO SECTOR RESIDENCIAL , VENDEMOS PROPIEDAD DE 4  PISOS Y UNA VILLA CASA , CON ESCRITURAS EN DIVISION HORIZONTAL , EN LA PLANTA BAJA LOS PARQUEADEROS Y BODEGA.</div>
                </div>
            </div>
        </div>
    )
}

export default Album;
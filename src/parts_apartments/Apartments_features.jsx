import style from "./Aparments_features.module.css"
import first_floor from "./First_floor"
import second_floor from "./Second_floor"
import third_floor from "./Third_floor";
import house from "./House"
import nearby_places from "./Nearby_places"
import Carousel from "./Carousel";
import mapa_img from "../mapa.png"
function Apartments_features () {

    return (
        <div className={style.features_containers}>
            <div className={style.general_information}>
                <h2>INFORMACIÓN GENERAL</h2>

                <div className={style.info_parts}>
                    <div className={style.info_data}>
                        <p>
                            <b>Áreas cubiertas:</b> 428.51 métros cuadrados
                        </p>
                        <p>
                            <b>Áreas abiertas:</b> 93.37 métros cuadrados
                        </p>
                        <p>
                            <b>Total:</b> 521.88 métros cuadrados
                        </p>

                        <p>
                            <b>Direccion: </b>
                            <a href="https://www.google.com/maps/place//@-0.2043373,-78.4763968,19.79z?entry=ttu"
                                          target="_blank">
                            Quito, Guapulo, AV. Ana de ayala n27-65 y la tolita
                        </a>
                        </p>
                        <p>
                            <b>Precios: </b>
                            $ 78.000 POR DEPARTAMENTO y CASA VALOR $ 85.000 NEGOCIABLES
                        </p>
                        <p>
                            <b>Tiene garage: </b>
                            Si
                        </p>
                        <p>
                            <b>Tiene terraza: </b>
                            Si
                        </p>
                        <p>
                            ¡BARRIO SEGURO!
                        </p>
                    </div>
                    <div className={style.info_map}>
                        <img className={style.map} src={mapa_img}/>
                    </div>
                </div>

            </div>

            <div className={style.first_apartment}>

                <div>
                    <h3>Apartemento del primer piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos y 1 social</p>
                    <p>Sala, comedor, cocina y balcon</p>
                    <p>Cubierta 100.68 m2</p>
                    <p>Bodega 1, 12.88 m2</p>
                    <p>Área abierta 9.14 m2</p>
                </div>
                <div>
                    <Carousel images={first_floor} />
                </div>

            </div>
            <div className={style.second_apartment}>
                <div>
                    <Carousel images={second_floor} />
                </div>
                <div>
                    <h3>Apartemento del segundo piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos y 1 social</p>
                    <p>Sala, comedor y cocina</p>
                    <p>Cubierta 99.57 m2</p>
                    <p>Estacionamiento 1, 16.73 m2 </p>
                    <p>Área abierta 9 m2</p>
                </div>
            </div>
            <div className={style.third_apartment}>
                <div>
                    <h3>Apartemento del tercer piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos</p>
                    <p>Sala, comedor y cocina</p>
                    <p>Cubierta 85,45 m2 </p>
                    <p>Área abierta Terraza accesible 14,56 m2</p>
                    <p>Estacionamiento 2, 12.89 m2 </p>
                </div>
                <div>
                    <Carousel images={third_floor} />
                </div>
            </div>

            <div className={style.house}>
                <div>
                    <Carousel images={house}/>
                </div>
                <div>
                    <h3>Casa</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos</p>
                    <p>Sala, comedor y cocina </p>
                    <p>Cubierta 70.93 m2</p>
                    <p>Bodega 2, 14.39 m2</p>
                    <p>Estacionamiento 14,99 m2</p>
                    <p>Jardín y espacio verde 51.19 m2</p>
                </div>
            </div>

            <div className={style.nearby_places}>
                <div className={style.places}>
                    <lo>Lugares cercanos: </lo>
                    <li>La Floresta</li>
                    <li>AV. Simón Bolivar</li>
                    <li>Universidad internacional SEK</li>
                    <li>Iglesia de Guapulo</li>
                    <li>Parque de Guapulo</li>
                    <li>Hotel Quito</li>
                </div>
                <div>
                    <Carousel images={nearby_places}/>
                </div>
            </div>
        </div>
    )
}

export default Apartments_features;
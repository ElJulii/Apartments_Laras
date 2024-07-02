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
                    <div className="info_data">
                        <p>
                            <strong>Áreas cubiertas:</strong> 428.51 metros cuadrados
                        </p>
                        <p>
                            <strong>Áreas abiertas:</strong> 93.37 metros cuadrados
                        </p>
                        <p>
                            <strong>Total:</strong> 521.88 métros cuadrados
                        </p>

                        <p>
                            <b>Direccion: </b>
                            <a href="https://www.google.com/maps/place//@-0.2043373,-78.4763968,19.79z?entry=ttu"
                                          target="_blank">
                                Quito, Guápulo, Av. Ana de Ayala N27-65 y La Tolita
                        </a>
                        </p>
                        <p>
                            <b>Precios: </b>
                            $ 78.000 POR APARTAMENTO y CASA VALOR $ 85.000 NEGOCIABLES
                        </p>
                        <p>
                            <b>Tiene garage: </b>
                            Sí
                        </p>
                        <p>
                            <b>Tiene terraza: </b>
                            Sí
                        </p>
                        <p>
                            ¡BARRIO SEGURO!
                        </p>
                    </div>
                    <div className="info_map">
                        <img className={style.map} src={mapa_img} alt="mapa"/>
                    </div>
                </div>

            </div>

            <div className={style.first_apartment}>

                <div>
                    <h3>Apartamento del primer piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos y 1 social</p>
                    <p>Sala, comedor, cocina y balcón</p>
                    <p>Cubierta: 100.68 m²</p>
                    <p>Bodega 1: 12.88 m²</p>
                    <p>Área abierta: 9.14 m²</p>
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
                    <h3>Apartamento del segundo piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos y 1 social</p>
                    <p>Sala, comedor y cocina</p>
                    <p>Cubierta: 99.57 m²</p>
                    <p>Estacionamiento 1: 16.73 m²</p>
                    <p>Área abierta: 9 m²</p>
                </div>
            </div>
            <div className={style.third_apartment}>
                <div>
                    <h3>Apartamento del tercer piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos</p>
                    <p>Sala, comedor y cocina</p>
                    <p>Cubierta: 85.45 m²</p>
                    <p>Área abierta (Terraza accesible): 14.56 m²</p>
                    <p>Estacionamiento 2: 12.89 m²</p>
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
                    <p>Cubierta: 70.93 m²</p>
                    <p>Bodega 2: 14.39 m²</p>
                    <p>Estacionamiento 14,99 m²</p>
                    <p>Jardín y espacio verde 51.19 m²</p>
                </div>
            </div>

            <div className={style.nearby_places}>
                <div className={style.places}>
                    <lo><strong>Lugares cercanos</strong></lo>
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
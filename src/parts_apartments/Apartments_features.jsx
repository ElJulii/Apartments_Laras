import style from "./Aparments_features.module.css"
import first_floor from "./First_floor"
import second_floor from "./Second_floor"
import third_floor from "./Third_floor";
import house from "./House"
import nearby_places from "./Nearby_places"
import Carousel from "./Carousel";
function Apartments_features() {
    return (
        <div className={style.features_container}>
            <section className={style.section}>

                <div className={style.grid_container}>
                    <div className={style.info}>
                        <h2 className={style.section_title}>INFORMACIÓN GENERAL</h2>
                        <p><strong>Áreas cubiertas:</strong> 428.51 metros cuadrados</p>
                        <p><strong>Áreas abiertas:</strong> 93.37 metros cuadrados</p>
                        <p><strong>Total:</strong> 521.88 metros cuadrados</p>
                        <p><b>Dirección:</b> <a href="https://www.google.com/maps/place//@-0.2043373,-78.4763968,19.79z?entry=ttu" target="_blank" rel="noopener noreferrer">Quito, Guápulo, Av. Ana de Ayala N27-65 y La Tolita</a></p>
                        <p><b>Precios:</b> $ 78.000 POR APARTAMENTO y CASA VALOR $ 85.000 NEGOCIABLES</p>
                        <p><b>Tiene garage:</b> Sí</p>
                        <p><b>Tiene terraza:</b> Sí</p>
                        <p>¡BARRIO SEGURO!</p>
                    </div>
                    <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d249.3620574999292!2d-78.476407771747!3d-0.20444716944041372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2sru!4v1720078716436!5m2!1ses!2sru"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

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
                    <ol><strong>Lugares cercanos</strong></ol>
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
    );
}


export default Apartments_features;
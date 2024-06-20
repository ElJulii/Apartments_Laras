import style from "./Aparments_features.module.css"
import first_floor from "./First_floor"
import second_floor from "./Second_floor"
import third_floor from "./Third_floor";
import house from "./House"
import Carousel from "./Carousel";
function Apartments_features () {

    return (
        <div className={style.features_containers}>
            <div className={style.general_information}>
                <h2>Informacion General:</h2>
                <h3>Áreas cubiertas: 428.51 métros cuadrados</h3>
                <h3>Áreas abiertas: 93.37 métros cuadrados</h3>
                <h3>Total: 521.88 métros cuadrados</h3>
                <h3>Direccion: Quito, Guapulo, AV. Ana de ayala n27-65 y la tolita</h3>
                <h3>Precios: $ 78.000 POR DEPARTAMENTO y CASA VALOR $ 85.000 - NEGOCIABLES</h3>
                <h3>mapa</h3>
            </div>

            <div className={style.first_apartment}>

                <div>
                    <h3>Apartemento del primer piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos y 1 social</p>
                    <p>Sala, cocina y terraza independiente</p>
                </div>
                <div>
                    <Carousel images={first_floor} />
                </div>

            </div>
            <div className={style.second_apartment}>
                <div>
                    <h3>Apartemento del segundo piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos y 1 social</p>
                    <p>Sala y cocina</p>
                </div>
                <div>
                    <Carousel images={second_floor} />
                </div>
            </div>
            <div className={style.third_apartment}>
                <div>
                    <h3>Apartemento del tercer piso</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos</p>
                    <p>Sala, cocina y terraza independiente</p>
                </div>
                <div>
                    <Carousel images={third_floor} />
                </div>
            </div>

            <div className={style.house}>
                <div>
                    <h3>Casa</h3>
                    <p>Dormitorios: 3</p>
                    <p>Baños: 2 completos</p>
                    <p>Sala, cocina, jardín y espacio verde</p>
                </div>
                <div>
                    <Carousel images={house}/>
                </div>

            </div>
        </div>
    )
}

export default Apartments_features;
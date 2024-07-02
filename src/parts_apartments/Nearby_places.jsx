import AV_simon_bolivar from "./nearby_places/AV_simon_bolivar.png"
import floresta from "./nearby_places/floresta.jpg"
import hotel_quito from "./nearby_places/hotel_quito.jpg"
import iglesia_guapulo from "./nearby_places/iglesia_guapulo.jpg"
import parque_guapulo from "./nearby_places/parque_guapulo.jpg"
import universidad from "./nearby_places/uni.jpg"
function nearby_places() {
    return(
        [
            {id: 1, url: floresta, place: "La floresta"},
            {id: 2, url: AV_simon_bolivar, place: "AV.Simon Bolivar"},
            {id: 3, url: hotel_quito, place: "Hotel Quito"},
            {id: 4, url: parque_guapulo, place: "Parque de Guapulo"},
            {id: 5, url: iglesia_guapulo, place: "Iglesia de Guapulo"},
            {id: 6, url: universidad, place: "Universidad Internacional SEk"},
        ]
    )
}
export default nearby_places();
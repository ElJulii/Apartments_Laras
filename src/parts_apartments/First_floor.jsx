import dinner_1 from "./imgs_first/comedor_1.jpg"
import bathroom_whole_1 from "./imgs_first/bano_completo_1.jpg"
import bathroom_living_1 from "./imgs_first/bano_sala_1.jpg"
import kitchen_1 from "./imgs_first/cocina_1.jpg"
import principal_bedroom_1 from "./imgs_first/principal_cuarto_1.jpg"
import living_1 from "./imgs_first/sala_1.jpg"
import second_bedroom_1 from "./imgs_first/segundo_cuarto_1.jpg"
import third_bedroom_1 from "./imgs_first/tercer_cuarto_1.jpg"
import furniture_1 from "./imgs_first/muebles_cocina_1.jpg"
function first_floor() {
    return [
        {id: 1, url: dinner_1, part: "dinner"},
        {id: 2, url: bathroom_whole_1, part: "bathroom"},
        {id: 3, url: bathroom_living_1, part: "living"},
        {id: 4, url: kitchen_1, part: "kitchen"},
        {id: 5, url: principal_bedroom_1, part: "bedroom"},
        {id: 6, url: living_1, part: "living"},
        {id: 7, url: second_bedroom_1, part: "bedroom"},
        {id: 8, url: third_bedroom_1, part: "bedroom"},
        {id: 9, url: furniture_1, part: "furniture"}
    ]
}

export default first_floor()
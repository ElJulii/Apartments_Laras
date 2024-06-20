import balcon_3 from "./imgs_third/balcon_3.jpg"
import first_bathroom_3 from "./imgs_third/first_bathroom_3.jpg"
import first_bedroom_3 from "./imgs_third/first_bedroom_3.jpg"
import kitchen_3 from "./imgs_third/kitchen_3.jpg"
import living_3 from "./imgs_third/living_3.jpg"
import second_bedroom_3 from "./imgs_third/second_bedroom_3.jpg"
function third_floor () {
    return [
        {id: 1, url: balcon_3, part: "balcon"},
        {id: 2, url: first_bathroom_3, part: "bathroom"},
        {id: 3, url: first_bedroom_3, part: "bedroom"},
        {id: 4, url: kitchen_3, part: "kitchen"},
        {id: 5, url: living_3, part: "living"},
        {id: 6, url: second_bedroom_3, part: "bedroom"},
    ]
}

export default third_floor();
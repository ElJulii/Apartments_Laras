import first_bathroom from "./house/first_bathroom.jpg"
import house from "./house/house.jpg"
import house_2 from "./house/house_2.jpg"
import kitchen_house from "./house/kitchen_house.jpg"
import living_house from "./house/living_house.jpg"
import second_bathroom from "./house/second_bathroom_house.jpg"
import second_floor_house from "./house/second_floor_house.jpg"
import third_bedroom_house from "./house/third_bedroom_house.jpg"
import first_bedroom_house from "./house/first_bedroom_house.jpg"

function house_function() {
    return [
        {id: 1, url: first_bathroom, part: "bathroom"},
        {id: 2, url: house, part: "house"},
        {id: 3, url: house_2, part: "house"},
        {id: 4, url: kitchen_house, part: "kitchen"},
        {id: 5, url: living_house, part: "living"},
        {id: 6, url: second_bathroom, part: "bathroom"},
        {id: 7, url: second_floor_house, part: "bedroom"},
        {id: 8, url: third_bedroom_house, part: "bedroom"},
        {id: 9, url: first_bedroom_house, part: "bedroom"}
    ]
}

export default house_function();
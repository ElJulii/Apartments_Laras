import first_bathroom_2 from "./imgs_second/first_bathroom_2.jpg"
import first_bedroom_2 from "./imgs_second/first_bedroom_2.jpg"
import furniture_2 from "./imgs_second/furniture_2.jpg"
import kitchen_2 from "./imgs_second/kitchen_2.jpg"
import principal_bathroom_2 from "./imgs_second/principal_bathroom.jpg"
import second_bathroom_2 from "./imgs_second/second_bathroom_2.jpg"
import second_bedroom_2 from "./imgs_second/second_bedroom_2.jpg"
import third_bedroom_2 from "./imgs_second/thrid_bedroom_2.jpg"

function second_floor () {
    return [
        {id: 1, url: first_bathroom_2, part: "bathroom"},
        {id: 2, url: first_bedroom_2, part: "bathroom"},
        {id: 3, url: furniture_2, part: "furniture"},
        {id: 4, url: kitchen_2, part: "kitchen"},
        {id: 5, url: principal_bathroom_2, part: "bathroom"},
        {id: 6, url: second_bathroom_2, part: "bathroom"},
        {id: 7, url: second_bedroom_2, part: "bedroom"},
        {id: 8, url: third_bedroom_2, part: "bedroom"},
    ]
}

export default second_floor();
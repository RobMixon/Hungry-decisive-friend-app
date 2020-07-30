import Keys from "../Keys";

const api = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="
const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id="
const detail = "&fields=name,rating,formatted_phone_number,formatted_address,website"

export default {
    getSearchData(destination, radius) {
        return fetch(`${api}${destination}&type=restaurant&radius=${radius}&key=${Keys}`)
        .then(results => results.json())

    },
    getRandomResult(destination, radius) {
        return fetch(`${api}${destination}&type=restaurant&radius=${radius}&key=${Keys}`)
        .then(results => results.json())
        // .then(json => {
        //     const randomIndex = Math.floor(Math.random()* json.results.length);
        //     const randomResult = json.results[randomIndex];
        //     return randomResult;
        // })
    },
    getDetail(place_id) {
        return fetch(`${url}${place_id}${detail}&key=${Keys}`)
        .then(results => results.json())
    }
}

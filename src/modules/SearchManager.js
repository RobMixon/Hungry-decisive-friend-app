import Keys from "../Keys";

const api = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="
const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id="
const detail = "&fields=name,rating,formatted_phone_number,formatted_address,website,place_id"
const json = "http://localhost:5002"

export default {
    // fetch calls to the google APIs
    getSearchData(destination, radius) {
        return fetch(`${api}${destination}&type=restaurant&radius=${radius}&key=${Keys}`)
        .then(results => results.json())

    },
    getRandomResult(destination, radius) {
        return fetch(`${api}${destination}&type=restaurant&radius=${radius}&key=${Keys}`)
        .then(results => results.json())
    },
    getDetail(place_id) {
        return fetch(`${url}${place_id}${detail}&key=${Keys}`)
        .then(results => results.json())
    },
    // calls to the JSON server
    post(newRestaurant) {
        return fetch(`${json}/restaurants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRestaurant)
        }).then(data => data.json())
    },
    getAll() {
        return fetch(`${json}/restaurants`).then(result => result.json())
    },
    get(id) {
    return fetch(`${json}/restaurants/${id}`).then(result => result.json())
    },
    delete(id) {
    return fetch(`${json}/restaurants/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
    },
    update(editedRestaurant) {
        return fetch(`${json}/animals/${editedRestaurant.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedRestaurant)
        }).then(data => data.json());
      }
}

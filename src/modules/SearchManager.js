import Keys from "../Keys";

const api = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="
const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id="
const detail = "&fields=name,rating,formatted_phone_number,formatted_address,website,place_id,type"
const json = "http://localhost:5002"

export default {
    // fetch calls to the google APIs
    getRandomResult(destination, radius, type) {
        return fetch('https://fe-cors-proxy.herokuapp.com', {
            headers: {
                "Target-URL": `${api}${destination}&type=${type}&radius=${radius}&key=${Keys}`
            }
        })
            .then(response => response.json())
            .catch(err => console.log("err", err))
    },
    getDetail(place_id) {
        return fetch('https://fe-cors-proxy.herokuapp.com', {
            headers: {
                "Target-URL": `${url}${place_id}${detail}&key=${Keys}`
            }
        })
            .then(response => response.json())
            .catch(err => console.log("err", err))
    },
    // calls to the JSON server
    postPlace(newPlace) {
        return fetch(`${json}/places`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlace)
        }).then(data => data.json())
            .catch(err => console.log("err", err))
    },
    getAllPlaces() {
        return fetch(`${json}/places`)
            .then(result => result.json())
            .catch(err => console.log("err", err))
    },
    getPlace(id) {
        return fetch(`${json}/places/${id}`)
            .then(result => result.json())
            .catch(err => console.log("err", err))
    },
    delete(id) {
        return fetch(`${json}/places/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
            .catch(err => console.log("err", err))
    },
    update(editedPlace) {
        return fetch(`${json}/places/${editedPlace.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedPlace)
        }).then(data => data.json())
            .catch(err => console.log("err", err))
    }
}

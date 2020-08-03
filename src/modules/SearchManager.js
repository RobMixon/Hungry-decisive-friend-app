import Keys from "../Keys";

const api="https://maps.googleapis.com/maps/api/place/textsearch/json?query="
const url="https://maps.googleapis.com/maps/api/place/details/json?place_id="
const detail="&fields=name,rating,formatted_phone_number,formatted_address,website,place_id"
const json="http://localhost:5002"

export default {
    // fetch calls to the google APIs
    getRandomResult(destination, radius) {
        return fetch('https://fe-cors-proxy.herokuapp.com',{
            headers:{
               "Target-URL":`${api}${destination}&type=restaurant&radius=${radius}&key=${Keys}` 
            }
        })
        .then(response=>response.json())
        .catch(err=>console.log("err",err))
    },
    getDetail(place_id) {
        return fetch('https://fe-cors-proxy.herokuapp.com',{
            headers:{
               "Target-URL":`${url}${place_id}${detail}&key=${Keys}` 
            }
        })
        .then(response=>response.json())
        .catch(err=>console.log("err",err))
    },
    // calls to the JSON server
    postRestaurant(newRestaurant) {
        return fetch(`${json}/restaurants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRestaurant)
        }).then(data => data.json())
        .catch(err=>console.log("err",err))
    },
    getAllRestaurants() {
        return fetch(`${json}/restaurants`)
        .then(result => result.json())
        .catch(err=>console.log("err",err))
    },
    getRestaurant(id) {
        return fetch(`${json}/restaurants/${id}`)
        .then(result => result.json())
        .catch(err=>console.log("err",err))
    },
    delete(id) {
        return fetch(`${json}/restaurants/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
        .catch(err=>console.log("err",err))
    },
    update(editedRestaurant) {
        return fetch(`${json}/restaurants/${editedRestaurant.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedRestaurant)
        }).then(data => data.json())
        .catch(err=>console.log("err",err))
    }
}

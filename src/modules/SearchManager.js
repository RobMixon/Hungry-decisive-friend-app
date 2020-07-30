import Keys from "../Keys";

const api = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="

export default {
    getSearchData(destination, radius) {
        return fetch(`${api}${destination}&type=restaurant&radius=${radius}&key=${Keys}`)
        .then(results => results.json())

    },
    getRandomResult() {
        return fetch(`${api}&type=restaurant&key=${Keys}`)
        .then(results => results.json())
        // .then(json => {
        //     const randomIndex = Math.floor(Math.random()* json.results.length);
        //     const randomResult = json.results[randomIndex];
        //     return randomResult;
        // })
    }
}

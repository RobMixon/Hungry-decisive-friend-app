import Keys from "../Keys";

const api = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="

export default {
    getSearchData() {
        return fetch(`${api}&type=restaurant&key=${Keys}`)

    }
}

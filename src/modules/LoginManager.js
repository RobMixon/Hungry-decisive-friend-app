const remoteURL = "http://localhost:5002";

export default{
    //login fetch calls
    get(id) {
        return fetch(`${remoteURL}/users/${id}`)
        .then(result=>result.json())
        .catch(err=>console.log("err",err))
    },
    getAll() {
        return fetch(`${remoteURL}/users`)
        .then(result => result.json())
        .catch(err=>console.log("err",err))
    },
    post(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(result=>result.json())
        .catch(err=>console.log("err",err))
    }
}

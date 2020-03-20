const remoteURL = "http://localhost:8000"

export default {
    getAll() {
        return fetch(`${remoteURL}/poems`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("rhymocerous_token")}`
            }
        }).then(response => response.json())

    },
    get(id) {
        return fetch(`${remoteURL}/poems/${id}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("rhymocerous_token")}`
            }
        })
    },
    post(newObject) {
        return fetch(`${remoteURL}/poems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("rhymocerous_token")}`
            },
            body: JSON.stringify(newObject)
        }).then(response => response.json())
    }
}
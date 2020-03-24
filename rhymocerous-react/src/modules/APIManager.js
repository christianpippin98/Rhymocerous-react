const remoteURL = "http://localhost:8000"
const userSpecifics = "?poet=true"

export default {
    getAll() {
        return fetch(`${remoteURL}/poems${userSpecifics}`, {
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
    delete(id) {
        return fetch(`${remoteURL}/poems/${id}`, {
          "method": "DELETE",
          "headers": {
            "Accept": "application/json",
            "Authorization": `Token ${sessionStorage.getItem("rhymocerous_token")}`
          }
        });
      },
    post(newObject) {
        return fetch(`${remoteURL}/poems`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("rhymocerous_token")}`
            },
            "body": JSON.stringify(newObject)
        }).then(response => response.json())
    }
}
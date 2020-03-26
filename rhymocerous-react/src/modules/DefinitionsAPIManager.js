const remoteURL = "https://api.datamuse.com/words?sp="

export default {
    getInfo(word) {
        return fetch(`${remoteURL}${word}&md=d`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    } 
}
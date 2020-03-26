const remoteURL = "https://api.datamuse.com/words?rel_syn="

export default {
    getInfo(word) {
        return fetch(`${remoteURL}${word}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    } 
}
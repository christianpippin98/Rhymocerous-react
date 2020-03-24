const remoteURL = "https://api.datamuse.com/words?rel_rhy="


export default {
    getRhymes(word) {
        return fetch(`${remoteURL}${word}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    } 
}
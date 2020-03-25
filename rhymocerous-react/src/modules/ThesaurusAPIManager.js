const remoteURL = "https://dictionaryapi.com/api/v3/references/thesaurus/json/"
const key = "?key=faa9c88a-5bc4-4642-9b42-e5dd354b272c"

export default {
    getInfo(word) {
        return fetch(`${remoteURL}${word}${key}`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    } 
}
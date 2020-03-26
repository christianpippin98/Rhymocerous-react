const remoteURL = "https://dictionaryapi.com/api/v3/references/thesaurus/json/"
const key = "?key=faa9c88a-5bc4-4642-9b42-e5dd354b272c"
const JSONP = "?callback=foo"

export default {
    getInfo(word) {
        return fetch(`${remoteURL}${word}${key}${JSONP}`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    } 
}
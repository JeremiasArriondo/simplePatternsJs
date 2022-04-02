const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
//implementando adapter
const adapter = {
    get: url => instance.get(url),
    post: (url, body) => instance.post(url, body),
    put: (url, body) => instance.put(url, body),
    post: url => instance.delete(url),
}

module.exports = adapter;
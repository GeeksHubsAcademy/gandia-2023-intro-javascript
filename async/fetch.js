const API_KEY = "10b2a75d0c5d29a93d009c31e8d01a78";

const identificador = 11;


fetch(`https://api.themoviedb.org/3/move/${identificador}?api_key=${API_KEY}`)

    .then(response => {
        console.log(response.status);
        return response;
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Status not 200')
        }
        return res;
    })
    .then(response => response.json())
    .then(data => console.log(data, typeof data))
    .catch(console.error)
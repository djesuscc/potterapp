const baseUrl = process.env.NODE_ENV === "production"
    ? "https://potterapp.herokuapp.com" : "http://localhost:3000";
const fetchData = (path, data, method = "GET") => {
    const url = `${baseUrl}/${path}`;
    if (method === "GET") {
        return fetch(url);
    }

    return fetch(url, {
        method,
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export default fetchData;
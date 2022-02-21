const baseUrl = process.env.REACT_APP_API_URL;
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
export default function PostJSON(data) {
    console.log(JSON.stringify(data));
    return fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
    }).then(response => response.json())
    .then(json => { console.log(json) })
    .catch(error => { console.error(error)})
}
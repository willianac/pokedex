import wrapPromise from "./wrapPromise"

function fetchData(url, query) {
    const promise = fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query : query
        }),
        method: 'POST',
        })
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((error) => console.log('failed to fetch'))
    return wrapPromise(promise)
}

export default fetchData;
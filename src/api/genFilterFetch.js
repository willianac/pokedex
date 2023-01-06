export default async function genFilterFetch(url, queryGen) {
    const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query : queryGen
        }),
        method: 'POST',
    })
    const data = await response.json()
    return data.data
}
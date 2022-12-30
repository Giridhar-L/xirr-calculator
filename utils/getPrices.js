export default function getPrices(symbols) {
  let quote_url = "/api/getPrices"
  return fetch(
    quote_url,
    { method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(symbols) }
    )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data
    })
    .catch(() => {
      ///Exception occured do something
    })
}

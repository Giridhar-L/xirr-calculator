import { NseIndia } from "stock-nse-india";
const nseIndia = new NseIndia()

export default async function handler(req, res) {

  let data = {}
  const symbols = req.body

  const getPrice = (symbol) => nseIndia.getEquityDetails(symbol).then(details => {
    // console.log(details.priceInfo)
    data[symbol] = details.priceInfo
  })

  let requests = symbols.map(scrip => getPrice(scrip))
  
  await Promise.all(requests)

  res.status(200).json(data)

}
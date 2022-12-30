import { NseIndia } from "stock-nse-india";
const nseIndia = new NseIndia()

export default async function handler(req, res) {

  let data = {}

  // To get all symbols from NSE
  await nseIndia.getAllStockSymbols().then(symbols  => {
  // console.log(symbols)
  data["symbols"] = symbols
  })

  // To get equity details for specific symbol
  await nseIndia.getEquityDetails('IRCTC').then(details => {
    console.log(details.priceInfo)
    data["details"] = details
  })

  res.status(200).json(data)

}
import { xirr, convertRate, RootFinderMethod } from "node-irr";

export default function calculateXIRR(transformedRows, currentValuation) {
  const cashflow = [
    ...transformedRows,
    {
      amount: currentValuation,
      date: new Date()
    }
  ];

  let rate;
  try {
    rate = xirr(cashflow, {
      fallbackMethod: RootFinderMethod.Bisection,
      method: RootFinderMethod.Newton
    });
    rate = convertRate(rate.rate, "year");
  } catch (err) {
    console.error(err);
  }

  return Math.round(rate * 100);
}

export function calculateXIRRBySymbol(cashflowsBySymbol, priceBySymbol) {

  console.log("From xirr calcualtion", priceBySymbol)
  let xirrBySymbol = []
  for (let key in cashflowsBySymbol) {
    let symbol = key,
      quantity = cashflowsBySymbol[key].quantity,
      trades = cashflowsBySymbol[key].trades;

    if (quantity > 0) {
      let price = priceBySymbol[symbol].lastPrice
      let currentValuation = quantity * parseInt(price, 10);
      const cashflow = [
        ...trades,
        {
          amount: currentValuation,
          date: new Date()
        }
      ];
      // console.log(symbol,item.quantity, currentValuation);
      let rate;
      try {
        rate = xirr(cashflow, {
          fallbackMethod: RootFinderMethod.Bisection,
          method: RootFinderMethod.Newton
        });
        rate = convertRate(rate.rate, "year");
        rate = Math.round(rate * 100);
        
        xirrBySymbol.push({ "symbol": symbol, "xirr": rate});
      } catch (err) {
        console.error(err);
      }
    }
  };
  // console.log(xirrBySymbol);
  return xirrBySymbol;
}

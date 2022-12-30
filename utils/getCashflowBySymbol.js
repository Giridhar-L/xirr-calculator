import { trimDuplicates, getCashflowsBySymbol } from './zerodha';

export default {
  zerodha: (trades) => {
    return [trimDuplicates, getCashflowsBySymbol].reduce(
      (transformedTrades, cb) => cb(transformedTrades),
      trades,
    );
  },
};

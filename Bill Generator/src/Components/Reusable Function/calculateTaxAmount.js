import { calculateCgstAndSgst } from "./calculateCgstAndSgst";

export const calculateTaxAmount = (tax, amount) => {
  var fullTax = calculateCgstAndSgst(tax, amount) * 2;
  return amount - fullTax;
};

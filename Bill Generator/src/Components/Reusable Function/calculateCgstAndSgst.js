export const calculateCgstAndSgst = (tax, amount) => {
  var inclusiveTax = Number(tax) + 100;
  var temp = amount / inclusiveTax;
  var res = temp * 100;
  return ((amount - res) / 2).toFixed(2);
};

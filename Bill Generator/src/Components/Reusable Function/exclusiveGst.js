export const calculateSubTotal = (list) => {
  var total = 0;
  for (let index = 0; index < list.length; index++) {
    total += list[index].total;
  }
  return total;
};

export const calculateExculsiveCSGT = (list, tax) => {
  var subtotal = calculateSubTotal(list);
  var cgst = (tax / 100) * subtotal;
  return (cgst / 2).toFixed(2);
};

export const returnTotal = (list, tax) => {
  var subtotal = calculateSubTotal(list);
  var cgst = calculateExculsiveCSGT(list, tax);

  return subtotal + cgst * 2;
};

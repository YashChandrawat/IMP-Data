export const calculateTotal = (list) => {
  var total = 0;
  for (let index = 0; index < list.length; index++) {
    var temp = Number(list[index].itemPrice) * Number(list[index].quantity);
    total += temp;
  }

  return total;
};

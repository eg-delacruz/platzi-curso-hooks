// eslint-disable-next-line import/prefer-default-export
export const handleSumTotal = (cart) => {
  // Función que suma todos los valores de un array
  // en un total
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

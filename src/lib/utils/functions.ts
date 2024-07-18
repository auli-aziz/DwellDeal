export const extractPrice = (price: string) => {
  if(price == null || price == "") return;
  price = price.replace(/,/g, ".");
  const pattern = /\d|\./;
  const filteredPrice = price.split('').filter(char => pattern.test(char)).join('');

  return filteredPrice;
}

export function calculateDiscountPercentage(
  fullPrice: number, price: number,
) {
  if (fullPrice && price) {
    const discount = fullPrice - price;
    const discountPercentage = (discount / fullPrice) * 100;

    return discountPercentage.toFixed(2);
  }

  return 0;
}

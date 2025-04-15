/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePricePerDay = 40;

  const discount = days < 3 ? 0 : days >= 7 ? 50 : 20;

  return basePricePerDay * days - discount;
}

module.exports = calculateRentalCost;

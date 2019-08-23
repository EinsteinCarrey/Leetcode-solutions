/**
 * @param {string} str
 * @return {number}
 */

/* eslint-disable no-restricted-globals */
const myAtoi = (str) => {
  const trimmed = str.trim();
  const fl = trimmed.substr(0, 1);
  const matchesFilter = x => ['-', '+'].includes(x);
  const checkIsNan = x => isNaN(parseInt(x, 10));

  if (!matchesFilter(fl) && checkIsNan(fl)) {
    return 0;
  }

  const chars = trimmed.split('');
  const lastNum = chars.findIndex((x, i) => i !== 0 && checkIsNan(x));

  const nums = (lastNum !== -1) ? trimmed.substr(0, lastNum) : trimmed;
  const minLimit = -1 * (2 ** 31);
  const maxLimit = (2 ** 31) - 1;

  if (nums > maxLimit) return maxLimit;
  if (nums < minLimit) return minLimit;
  if (matchesFilter(nums)) return 0;

  return parseInt(nums, 10);
};

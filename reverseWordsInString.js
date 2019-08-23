/**
 * @param {string} sentence
 * @return {string}
 */

const reverseWords = (sentence) => {
  const words = sentence.split(' ').filter(x => !!x.trim());
  const reversedWords = words.reverse();
  return reversedWords.join(' ');
};

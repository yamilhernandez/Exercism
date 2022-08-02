//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const isPangram = (word) => {
  if (!word) return false
  let arr = [...alphabet]
  return arr.every(c => word.toLowerCase().includes(c))
};


//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const RNA = "CGAU"
const DNA = "GCTA"

export const toRna = (dna) => {
  const rna = [...dna].map(char => {return RNA[DNA.indexOf(char)]})
  return rna.join('')
}
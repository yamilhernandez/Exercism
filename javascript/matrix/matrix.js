//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.root = matrix.split('\n')
  }

  get rows() {
    return this.root.map(row => row.split(' ').map(number => Number(number)))
  }

  get columns() {
    return this.rows[0].map((col, idx) => this.rows.map(row => row[idx]))
  }
}
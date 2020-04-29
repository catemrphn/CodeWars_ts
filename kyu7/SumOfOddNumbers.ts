/**
 * Given the triangle of consecutive odd numbers:
 *                    1
 *                 3     5
 *              7     9    11
 *          13    15    17    19
 *       21    23    25    27    29
 * ...
 * Calculate the row sums of this triangle from the row index (starting at index 1).
 **/

export function sumOddNumbers(row: number) {
    const firstNumber = row === 1 ? 1 : row * (row - 1) + 1;
    return ((2 * firstNumber + (row - 1) * 2) / 2) * row;
}

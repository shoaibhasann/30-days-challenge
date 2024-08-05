function solveNQueens(n) {
  const results = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isValid(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }

  function solve(row) {
    if (row === n) {
      results.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(board, row, col)) {
        board[row][col] = "Q";
        solve(row + 1);
        board[row][col] = ".";
      }
    }
  }

  solve(0);
  return results;
}

// Example usage:
const n = 4;
console.log(solveNQueens(n));
// Output: [
//   [".Q..","...Q","Q...","..Q."],
//   ["..Q.","Q...","...Q",".Q.."]
// ]

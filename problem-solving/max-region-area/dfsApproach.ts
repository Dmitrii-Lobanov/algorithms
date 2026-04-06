export function findMaxRegionArea(matr: number[][]): number {
  const ROW_LEN = matr[0].length;
  var maxArea = 0;
  var visited = new Set<number>();

  for (let [rowIdx, row] of matr.entries()) {
    for (let [colIdx, cell] of row.entries()) {
      if (!visited.has(rowIdx * ROW_LEN + colIdx) && cell == 1) {
        let area =
          1 + countAdjacentArea(rowIdx, colIdx, visited, ROW_LEN, matr);

        // did this region have a bigger area than
        // we've seen so far?
        if (area > maxArea) {
          maxArea = area;
        }
      }
    }
  }

  return maxArea;
}

function countAdjacentArea(
  visitedRowIdx: number,
  visitedColIdx: number,
  visited: Set<number>,
  ROW_LEN: number,
  matr: number[][],
) {
  var area = 0;

  // compute the cell-index
  var visitedCellIdx = visitedRowIdx * ROW_LEN + visitedColIdx;

  // have we not visited this cell yet?
  if (!visited.has(visitedCellIdx)) {
    visited.add(visitedCellIdx);

    // inspect current row and two (possibly) adjacent rows
    for (let rowDelta of [-1, 0, 1]) {
      // inspect current column and two (possibly) adjacent columns
      for (let colDelta of [-1, 0, 1]) {
        // avoid re-considering the current cell
        if (!(rowDelta == 0 && colDelta == 0)) {
          let toVisitRowIdx = visitedRowIdx + rowDelta;
          let toVisitColIdx = visitedColIdx + colDelta;

          // is the cell actually in bounds of the matrix,
          // and is has a `1` in it, and is not already
          // a cell we've visited/counted?
          if (
            toVisitRowIdx >= 0 &&
            toVisitRowIdx <= matr.length - 1 &&
            toVisitColIdx >= 0 &&
            toVisitColIdx <= ROW_LEN - 1 &&
            matr[toVisitRowIdx][toVisitColIdx] == 1 &&
            !visited.has(toVisitRowIdx * ROW_LEN + toVisitColIdx)
          ) {
            // recursively (depth-first) visit all this
            // cell's unvisited adjacent cells to find
            // the whole region
            area +=
              1 +
              countAdjacentArea(
                toVisitRowIdx,
                toVisitColIdx,
                visited,
                ROW_LEN,
                matr,
              );
          }
        }
      }
    }
  }

  return area;
}

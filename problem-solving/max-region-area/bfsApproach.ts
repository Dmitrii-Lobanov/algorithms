export function findMaxRegionArea(matr: number[][]): number {
  const ROW_LEN = matr[0].length;
  var area = 0;
  var maxArea = 0;
  var visited = new Set();

  for (let [rowIdx, row] of matr.entries()) {
    for (let [colIdx, cell] of row.entries()) {
      if (!visited.has(rowIdx * ROW_LEN + colIdx) && cell == 1) {
        // initialize a breadth-first queue
        let toVisit = [[rowIdx, colIdx]];

        while (toVisit.length > 0) {
          // pull to-visit cell coordinates off the queue
          let [visitedRowIdx, visitedColIdx] = toVisit.shift()!;

          // compute the cell-index
          let visitedCellIdx = visitedRowIdx * ROW_LEN + visitedColIdx;

          // have we not visited this cell yet?
          if (!visited.has(visitedCellIdx)) {
            visited.add(visitedCellIdx);
            area++;

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
                    // schedule visiting this adjacent cell via
                    // the (breadth-first) queue
                    toVisit.push([toVisitRowIdx, toVisitColIdx]);
                  }
                }
              }
            }
          }
        }

        // did this region have a bigger area than
        // we've seen so far?
        if (area > maxArea) {
          maxArea = area;
        }
        area = 0;
      }
    }
  }

  return maxArea;
}

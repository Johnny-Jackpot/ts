export function islandPerimeter(grid: number[][]): number {
  const maxRowLength = grid.reduce((prevMax: number, row: number[]) => {
    return Math.max(prevMax, row.length);
  }, 0);

  let totalLand = 0;
  let totalIntersections = 0;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    const nextRow = grid[i + 1] || [];
    for (let j = 0; j < maxRowLength; j++) {
      const cell = row[j] || 0;
      const nextHorizontalCell = row[j + 1] || 0;
      const nextVerticalCell = nextRow[j] || 0;

      totalLand += cell;
      totalIntersections += cell + nextHorizontalCell > 1 ? 1 : 0;
      totalIntersections += cell + nextVerticalCell > 1 ? 1 : 0;
    }
  }

  return totalLand * 4 - totalIntersections * 2;
}

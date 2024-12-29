const dir = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1]
]

function walk(maze: string[], wall: string, currentPoint: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // base case 
  // 1 are we off the map /larger array
  if (currentPoint.x < 0 || currentPoint.x >= maze[0].length || currentPoint.y < 0 && currentPoint.y >= maze.length) {
    return false
  }
  //2. wall 
  if (maze[currentPoint.x][currentPoint.y] === wall) {
    return false
  }
  // are we at the end 
  if (currentPoint === end) {
    return true
  }
  //we've seen this element before
  if (seen[currentPoint.y][currentPoint.x]) {
    return false
  }

  //since we've seent he base cases we can be sure this point is point of moving forward
  seen[currentPoint.y][currentPoint.x] = true
  path.push(currentPoint);

  //recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i]
    walk(maze, wall, { x: x, y: y }, end, seen, path)

  }
  //post 
  path.pop()
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[i].length).fill(false))

  }
}

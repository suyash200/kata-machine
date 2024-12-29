export default function two_crystal_balls(breaks: boolean[]): number {

  let start = 0;
  let jump = 2;

  for (let i = 1; i < breaks.length; i = i + 2) {
    if (breaks[i] === true) {
      if (breaks[i - 1] === true) {
        return i - 1
      }
    }
  }
  return -1
}

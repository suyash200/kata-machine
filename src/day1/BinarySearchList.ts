export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  console.log(haystack)
  do {
    let mid = Math.floor((low + high) / 2);
    // console.log(low, mid, high);

    if (haystack[mid] === needle) {
      return true
    }
    else if (haystack[mid] < needle) {
      low = mid + 1
    }
    else if (haystack[mid] > needle) {
      high = mid

    }
  } while (low < high);
  return false
}

console.log(bs_list([1, 4, 5, 6, 7, 8, 8, 13, 35], 13))




function swapNumbers(arr: number[], toChange: number, withP: number) {

}
export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length - i; j++) {
      if (arr[i] > arr[j]) {
        console.log(arr);
        const temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp
        console.log(arr)
      }
    }

  }

}

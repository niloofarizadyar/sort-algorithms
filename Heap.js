function heapSort(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, n, largest);
  }
}

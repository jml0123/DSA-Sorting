/* BUBBLE SORT */
// Worst  (O(n^2))
// Best (O(n))
const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const bubbleSort = (array) => {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++
        }
    }
    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array
}


/* MERGE SORT*/
// Worst/Best  (O(nlog(n)))
let recursion = 0;
const mergeSort = (array) => {
    if (array.length <= 1) {
        return array
    }
    if(recursion === 16) {
        return array
    }
    const middle = Math.floor(array.length/2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)

    left = mergeSort(left);
    right = mergeSort(right)
    return merge(left, right, array)

}

const merge = (left, right, array) => {
    recursion++
    if (recursion === 7) {
        console.log('7th')
        console.log(left, right)
    }
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++]
        }
        else {
            array[outputIndex++] = right[rightIndex++]
        }
    }
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }
    for (let i = rightIndex; i < right.length; i++ ){
        array[outputIndex++] = right[i]
    }
    return array
}

/* QUICK SORT*/
// Worst O(n^2)
// Best (O(nlog(n)))
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    if (recursion === 2) {
        return array
    }
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};


//console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))
/* Q1. MERGE SORT */
// At 3 recursive calls, the array will be: 
/* 
   2,  9, 16, 21,  1, 26,
  27, 28, 29, 34, 39, 40,
  43, 45, 46, 49
*/

// At 16 recursive calls, the array will be: 
/*
  1,  2,  9, 16, 21, 26,
  28, 29, 45, 49, 39, 27,
  43, 34, 46, 40
*/
// First two lists to be merged ar 1, 21 and 26, 45
//  The 7th merge will be between [ 1, 21, 26, 45 ] [ 2, 9, 28, 29 ]

/* Q2. QUICK SORT */
// The pivot could have been either 14 or 17. Values to the left of 14 are less than 14, and values to the left of 17 are less than 17
// The values to the right of both numbers abide by the partition
//console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]))
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// Second partitioning with first item as pivot:
//   14, 13, 10,  3,  9, 12, 17, 15, 16, 19
// Second partitioning with last item as pivot:]
//   3,  9, 10, 12, 13, 14, 15, 16, 17, 19

// TODO
// Sorting a list using bucket sort?
// Sorting a list using sort in place?
// Sorting boooks

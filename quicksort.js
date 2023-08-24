function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  let pivot = arr[0];
  let leftHalf = [];
  let rightHalf = [];

  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    // every number smaller than the pivot is to the left
    if (arr[i] < pivot) {
      leftHalf.push(arr[i]);
    }
    // every number larger (or equal) than the pivot is to the right
    else {
      rightHalf.push(arr[i]);
    }
  }

  // Recursively sort the left
  let lhRtn = quicksort(leftHalf);
  // Recursively sort the right
  let rhRtn = quicksort(rightHalf);

  // Return the left, pivot and right in sorted order
  lhRtn.push(pivot); // pivot was assigned a single val from an array and is therefore a number. So use push method
  return (lhRtn.concat(rhRtn));

}


module.exports = [quicksort];

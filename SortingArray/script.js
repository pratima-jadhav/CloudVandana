const originalArray = [5, 3, 1, 4, 2];

// Create a copy of the original array
const copyArray = [...originalArray];

// Sort the copy in descending order
const descendingArray = copyArray.sort(function(a, b) {
    return b - a;
});

console.log(descendingArray);
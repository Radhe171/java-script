
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let numbers = [10, 25, 7, 80, 45];

console.log(findMax(numbers));

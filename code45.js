
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] < largest) {
            second = arr[i];
        }
    }

    if (second === -Infinity) {
        return "No second-largest distinct element";
    }

    return second;
}

let numbers = [10, 25, 7, 80, 45];

console.log(secondLargest(numbers));

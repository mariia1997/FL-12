let a = +prompt('Enter first side lenght');
let b = +prompt('Enter second side lenght');
let c = +prompt('Enter third side lenght');


if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (c < a + b && a < b + c && b < a + c) {
    alert('Triangle exists');
} else {
    alert('Triangle doesn’t exist');
}


if (a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle doesn’t exist');
} else if (a === b && b === c && c === a) {
    console.log('Type: Equilateral triangle');
} else if (a === b || b === c || c === a) {
    console.log('Type: Isosceles triangle');
} else if (a !== b && b !== c && c !== a) {
    console.log('Type: Scalene triangle ');
} 
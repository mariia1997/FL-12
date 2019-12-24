let a, b, c, d;
const n2 = 2,
      n4 = 4;
a = +prompt('Enter a');
b = +prompt('Enter b');
c = +prompt('Enter c');

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    console.log('Invalid input data');
} else {
    d = b * b - n4 * a * c;
}
if (d < 0) {
    console.log('No solution');
} else if (d === 0) {
    let result = -b / (n2 * a);
    console.log('x=' + Math.round(result));
} else {
    let result1 = (-b + Math.sqrt(d)) / (n2 * a),
        result2 = (-b - Math.sqrt(d)) / (n2 * a);
    console.log('x1=' + Math.round(result1) + ' ' + 'x2=' + Math.round(result2));

}
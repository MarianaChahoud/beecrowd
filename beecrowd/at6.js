var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);
var fib = [];

for (var i = 0; i < N; i++) {
    if (i === 0) {
        fib[i] = 0;
    } else if (i === 1) {
        fib[i] = 1;
    } else {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
}

console.log(fib.join(' '));
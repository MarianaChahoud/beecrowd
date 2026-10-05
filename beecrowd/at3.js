var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = [];

for (var i = 0; i < 10; i++) {
    var valor = parseInt(lines[i]);
    if (valor <= 0) {
        valor = 1;
    }
    X[i] = valor;
}

for (var i = 0; i < 10; i++) {
    console.log('X[' + i + '] = ' + X[i]);
}
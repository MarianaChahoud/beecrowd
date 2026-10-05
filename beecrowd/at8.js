var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);
var contagem = [];

for (var i = 0; i <= 2000; i++) {
    contagem[i] = 0;
}

for (var i = 1; i <= N; i++) {
    var valor = parseInt(lines[i]);
    contagem[valor]++;
}

for (var i = 0; i <= 2000; i++) {
    if (contagem[i] > 0) {
        console.log(i + ' aparece ' + contagem[i] + ' vez(es)');
    }
}
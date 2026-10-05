var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

for (var i = 1; i <= N; i++) {
    var linha = lines[i].replace('\r', '');

    var meio = linha.length / 2;
    var primeira = linha.substring(0, meio);
    var segunda = linha.substring(meio);

    var primeiraInvertida = primeira.split('').reverse().join('');
    var segundaInvertida = segunda.split('').reverse().join('');

    console.log(primeiraInvertida + segundaInvertida);
}
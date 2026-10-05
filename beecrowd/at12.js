var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

for (var i = 1; i <= N; i++) {
    var frase = lines[i];
    var letras = {};
    var distintas = 0;

    for (var j = 0; j < frase.length; j++) {
        var c = frase[j];

        if (c >= 'a' && c <= 'z') {
            if (!letras[c]) {
                letras[c] = true;
                distintas++;
            }
        }
    }

    if (distintas === 26) {
        console.log('frase completa');
    } else if (distintas >= 13) {
        console.log('frase quase completa');
    } else {
        console.log('frase mal elaborada');
    }
}
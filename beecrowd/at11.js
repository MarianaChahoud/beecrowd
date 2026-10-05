var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (var k = 0; k < lines.length; k++) {
    var texto = lines[k].trim();

    if (texto === '') {
        continue;
    }

    var partes = texto.split(/\s+/);
    var M = parseInt(partes[0]);
    var N = parseInt(partes[1]);

    if (M === 0 && N === 0) {
        break;
    }

    var soma = M + N;
    var semZeros = String(soma).replace(/0/g, '');

    console.log(semZeros);
}
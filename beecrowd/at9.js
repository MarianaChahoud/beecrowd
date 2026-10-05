var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (var k = 0; k < lines.length; k++) {
    var texto = lines[k].trim();

    if (texto === '') {
        continue;
    }

    var N = parseInt(texto);

    for (var i = 0; i < N; i++) {
        var linha = '';
        for (var j = 0; j < N; j++) {
            if (j === N - 1 - i) {
                linha += '2';
            } else if (i === j) {
                linha += '1';
            } else {
                linha += '3';
            }
        }
        console.log(linha);
    }
}
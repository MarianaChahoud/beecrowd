var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var ini1 = lines[0].match(/\d+/g);
var ini2 = lines[1].match(/\d+/g);
var fim1 = lines[2].match(/\d+/g);
var fim2 = lines[3].match(/\d+/g);

var inicio = parseInt(ini1[0]) * 86400 +
             parseInt(ini2[0]) * 3600 +
             parseInt(ini2[1]) * 60 +
             parseInt(ini2[2]);

var fim = parseInt(fim1[0]) * 86400 +
          parseInt(fim2[0]) * 3600 +
          parseInt(fim2[1]) * 60 +
          parseInt(fim2[2]);

var diferenca = fim - inicio;

var dias = Math.floor(diferenca / 86400);
diferenca = diferenca % 86400;

var horas = Math.floor(diferenca / 3600);
diferenca = diferenca % 3600;

var minutos = Math.floor(diferenca / 60);
var segundos = diferenca % 60;

console.log(dias + ' dia(s)');
console.log(horas + ' hora(s)');
console.log(minutos + ' minuto(s)');
console.log(segundos + ' segundo(s)');
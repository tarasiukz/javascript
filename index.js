/* comentario
123
*/

//declarações

alert("camelo")

console.log("ccccccc");


//variaveis

var a = 1;
var b = 2;
var c = a+b;
console.log(c);

//declaração de variaveis
var a,b,c

//atribuição de variaveis
a = 25;
b = 35;
c = a + b;

console.log(c);

//declaração de variaveis

var nome, sobrenonome, nomeCompleto, idade, soma;

//atribuição de variaveis
nome= "William";
sobrenonome= "Tarasiuk";
idade= 30;
nomeCompleto= nome + " " + sobrenonome;
soma=idade+15;
pessoa=nomeCompleto + " " + soma;
document.getElementById("texto").innerHTML = pessoa;

//prevalece o do topo do escopo
let x = 24;
{
    let x = 25;
}
document.getElementById("text").innerHTML = x;
//prevalece o do topo do escopo sempre
const y = 23;
{
    const y = 24;
}
document.getElementById("text1").innerHTML = y;
//prevalece o de dentro do escopo
var a = 12;
{
    var a = 15;
}
document.getElementById("text2").innerHTML = a;


var valor1, valor2, valor3,total;
valor1 = 5;
valor2= 9;
valor3=12;
total=valor1+valor2+valor3;
document.getElementById("text3").innerHTML=total;

var valor1, valor2, valor3,total;
valor1 = 5;
valor2= 9;
valor3=12;
total=++valor1+valor2+valor3;
document.getElementById("text4").innerHTML=total;












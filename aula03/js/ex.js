document.write("Senac - Curso - 2023 <br>")
document.write(50+ "200 <br> ")
document.write(100+200);
document.write("<p style= 'color:green'>Front-End</p>")
alert("Funcionou! ")

var a = 10;
var b = 100;
var curso = "Front";
var total = curso + '-' + (a+b);
document.write(total);

//Hoisting - Joga todas as definições pro início
x=5;
var x;
document.write(x);

const n = {nome: "Maria", sobrenome: "da Silva"};
n.nome = "Carlos";
document.write(n.nome + n.sobrenome);

//Como criar função e retornar em js
function exibirMensagem() {
  var mensagem = "Olá, mundo";
  console.log(mensagem);
}

exibirMensagem();


// Uma função para calcular o cubo d ovalor imputado pelo usuário
function calcularCubo() {
    var numero = prompt("Digite um número:");
    var cubo = numero * numero * numero;
    return cubo;
  }
  
  var resultado = calcularCubo();
  console.log(resultado);


  function converterFahrenheitParaCelsius() {
    var temperaturaF = prompt("Digite a temperatura em graus Fahrenheit:");
    var temperaturaC = (temperaturaF - 32) * 5/9;
    return temperaturaC;
  }
  
  var temperaturaC = converterFahrenheitParaCelsius();
  console.log(temperaturaC);


  function calculaArea(base,altura){
    var area = (altura * base)/2;
    return area;

 }

 var base = 10; // Valor da base definido como 10
var altura = 5; // Valor da altura definido como 5

var areaTriangulo = calculaArea(base,altura)
console.log(calculaArea);


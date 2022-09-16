/**
 * Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu
perímetro
 */
let base = Number(prompt("Inserir o valor da base do retangulo"))
let altura = Number(prompt("Inserir o valor da altura do retangulo"))
let calculo = base * altura
alert("Valor da área do triangulo: " + calculo)

calculo = 2 * (base + altura)

alert("Valor do perimetro do triangulo: " + calculo)
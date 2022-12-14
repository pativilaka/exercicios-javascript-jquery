/*
    Faça um programa para calcular o valor de uma viagem

    Você terá 5 varáveis, sendo elas:
    1° Preço do etanol;
    2º Preço da gasolina;
    3° Tipo de combústivel do carro;
    4° Gasto médio de combustível do carro por Km;
    5° Distância em Km da viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.9;
let tipoCombustivelCarro = 'gasolina';
const litrosPorKm = 10;
let distanciaKm = 100;

let litrosConsumidoViagem = distanciaKm / litrosPorKm;
let valorTotalViagem = 0.0;

if (tipoCombustivelCarro === 'gasolina'){
    valorTotalViagem = litrosConsumidoViagem * precoGasolina;
} else {
    valorTotalViagem = litrosConsumidoViagem * precoEtanol;
}

console.log('O valor gasto será: R$ ' + valorTotalViagem.toFixed(2) + '. O combustível é: ' + tipoCombustivelCarro);
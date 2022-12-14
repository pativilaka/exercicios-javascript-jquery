/*
    Faça um programa para calcular o valor de uma viagem

    Você terá 3 varáveis, sendo elas:
    1° Preço do combustível;
    2° Gasto médio de combustível do carro por Km;
    3° Distância em Km da viagem.
*/

const precoCombustivel = 5.79;
const litrosPorKm = 10
let distanciaKm = 100;

let litrosConsumidos = distanciaKm / litrosPorKm;
let valorTotalViagem = litrosConsumidos * precoCombustivel;

console.log('R$ ' + valorTotalViagem.toFixed(2));

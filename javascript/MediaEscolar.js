/**
 * Faça um programa que leia 3 notas de um aluno e imprima a média e a sua classificação conforme a tabela abaixo:
 * Classificação:
 * 1 - Média menor que 5 >> Reprovação
 * 2 - Média entre 5 e 7 >> Recuperação
 * 3 - Média acima de 7 >> Aprovado
 */

const nota1 = 1.0;
const nota2 = 7.0;
const nota3 = 2.0;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7 ){
    console.log('Aprovado');
} else if (media >= 5){
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}
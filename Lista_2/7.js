//7) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

let pessoas = 45
let chopp = 300

Desperdicio = Number(prompt('Quantos litros foram desperdiçados? '))
Sobrou = Number(prompt('Quantos litros sobraram do chopp? '))

let litrosRestantes = (chopp - (Desperdicio + Sobrou))
let LpPessoa = litrosRestantes / pessoas

alert('cada pessoa bebeu em média: '+ Math.round(LpPessoa )+' litros')

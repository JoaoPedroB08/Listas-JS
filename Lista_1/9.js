// 9) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.

let relGas = 5 
let relMinutos = 10

gasPorMinuto = relGas / relMinutos

PPasseio = Number(prompt('Quantas pessoas vão no passeio? (max 4) '))
tempopasseio = Number(prompt('Tempo do passeio? '))

valorTotalGas = (tempopasseio * gasPorMinuto) * gasPorMinuto
ValorTotalTaxa = PPasseio * taxaPessoa
valorFinal = valorTotalGas + valorTotalTaxa

alert('Custo: R$ ' + valorFinal)
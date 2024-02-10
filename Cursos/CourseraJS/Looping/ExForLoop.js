/* 
Exercício 1

Neste exercício, o senhor criará o código para um for loop, usando a variável de contador chamada i a partir de 1.

Para fazer com que o contador seja incrementado em 1 em cada loop, o senhor usará i++.

A condição de saída do loop for deve corresponder à saída fornecida abaixo. 

Dentro do loop, escreva uma instrução if-else, que verificará as seguintes condições:

Primeiro, ele verificará se o valor de i é  1. Se for, seu código registrará no console a string "Gold medal" (Medalha de ouro).

Em seguida, verificará se o valor de i é 2. Se for, seu código registrará no console a string "Silver medal" (Medalha de prata).

Em seguida, seu código verificará se o valor de i é 3. Se for, ele registrará no console a string "Bronze medal".

Para todos os valores restantes de i, o código registrará no console apenas o valor de i.
*/

for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        console.log(i)
    }
}

/*Exercício 2. Use o código concluído da tarefa anterior, mas converta as condicionais em uma instrução switch.
Quando codificar a solução, a saída no console deverá permanecer exatamente igual à da pergunta anterior.

Observação: O senhor precisará de três casos separados para as três medalhas e um caso padrão para todos os outros valores da variável i. */ 

for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}
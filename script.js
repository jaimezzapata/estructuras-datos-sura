// let numero = null
// let resultado = numero + numeroDos

// let nombre = 'Jaime Zapata'

// let variasCosas = [1, 'String', true, null, [2, 3, 4, ['Holis']], nombre]

// console.log(variasCosas[4][3][0])
// console.log(variasCosas.length)

// if(variasCosas[0] > 0){
//     console.log('Este elemento es true')
// }

// console.log(variasCosas)




// for (let index = 0; index < nombres.length; index++) {
//     if (nombres[index] == 'Isabela') {
//         console.log(nombres[index] + ' Existe en la base de datos')
//     }
// }
// for (let index = 0; index < nombres.length; index++) {
//     console.log(nombres[index])
// }

// for (let index = 0; index < nombres.length; index++) {
//     console.log(nombres[index])
// }
// for (let index = 0; index < nombres.length; index++) {
//     nombres[index] = prompt('Ingrese un nombre: ')
// }
// for (let index = 0; index < nombres.length; index++) {
//     console.log(nombres[index])
// }

// let nombres = ['Carlos', 'Isabela', 'Sebastian', 'Liliana', 'Isabela', 'Mateo', 'Yeris', 'Isabela']
// // let limite = nombres.length + 2

// for (let index = nombres.length; index < 10; index++) {
//     console.log(index)
//     nombres[index] = prompt('Ingrese un nombre: ')
// }

let nuevosNombres = []
for(let index = 0; index < 10; index++){
    nuevosNombres[index] = prompt('Ingrese un nombre: ')
}

for (let index = 0; index < nuevosNombres.length; index++) {
    console.log(nuevosNombres[index])    
}
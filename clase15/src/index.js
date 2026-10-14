//Estructura de Control de Bucle
//for (let i = 0; i < 10; i++){
//   console.log(i)
//}

//ARREGLOS
const numeros = [1, true, 'hola', 4, 5, 6]

//TIPOS NO PRIMITIVOS
const numeros1 = [1, 2, 3]
const numeros2 = [1, 2, 3]
const numeros3 = [1, 2, [2, 5], [1, [2]]];

//console.log (numeros3 [2][1])

for (let i = 0; i < numeros.length; i++){
  //console.log (numeros [i])
}

//OBJETOS
const persona = {
    nombre: 'Joaco',
    edad: 20,
    estudia: true,
    redes: [
        'Instagram',
        'Tik Tok'
    ],
    otros: {
        mascotas: 2
    }
}

console.log (persona.edad)
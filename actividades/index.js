const personas = [
    {
        nombre: 'Joaco',
        edad: 20
    },
    {
        nombre: 'Jose',
        edad: 21
    },
    {
        nombre: 'Andres',
        edad: 25
    }
]

//ForEach -> No devuelve nada
//personas.forEach((elementoDelArreglo, indice, arreglo) =>{
    //console.log (elementoDelArreglo.edad, indice, arreglo)
//})

//Map -> Devuelve un nuevo arreglo (return)
//const nuevoArregloPersonas = personas.map((persona, indice, arreglo) =>{
    //return {
        //...persona, //SPREAD
        //edad: persona.edad + 1
    //}
//})
//console.log (nuevoArregloPersonas)

//Filter -> Devuelve un nuevo arreglo
//const nuevoArregloPersonas = personas.filter((persona, indice, arreglo)=>{
    //return persona.edad > 23
//})
//console.log (nuevoArregloPersonas)
//Find -> Devuelve el primer elemento que cumple la condicion
const nuevoArregloPersonas = personas.find((persona, indice, arreglo)=>{
    return persona.edad >= 23
})
console.log (nuevoArregloPersonas)
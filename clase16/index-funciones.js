//Funciones
//De Declaracion
function suma1 (a, b){
    console.log (5 + 2)
    return (a + b)
}
let resultado1 = suma1 (10, 5)
console.log (resultado1)

//De Flecha
const suma2 = (a, b)=>{
    return a + b
}
let resultado2 = suma2 (10, 5)
console.log (resultado2)

//Callbacks
const a = (cb) => {
    console.log ('Se ejecuto la funcion a')
    cb ()
}
const b = () => {
    console.log ('Se ejecuto el callback que es funcion b')
}
const c = () => {
    console.log ('Se ejecuto el callback que es funcion c')
}
a (b)
a (c)
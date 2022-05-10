/* Hay dos manera de declarar arreglos.
Se puede utilizar var, let y const.

En general, se recomienda declararlos con const.

*/
const a = [];
console.log(typeof a); //te lo define como objeto. Pq el arreglo es un objeto
console.log(a); // imprime [] , lo que es un arreglo

function paulina() {
  console.log("hola");
}

const b = [
  1,
  true,
  "Hola",
  ["A", "B", "C", [1, 2, 3, 4, 5]],
  paulina(),
  //let car = { longitud: 30 },
]; //un arreglo es una coleccion de elementos. Pueden ser de diferente tipo, incluyendo funciones y objetos

console.log(b);
console.log(b.length); //te tira 5 elementos. El primer elemento de un arreglo es SIEMPRE 0.Esto es pq en los objetos compuestos se accede a la referencia del valor, como si fueran coordenadas:

console.log(b[2]); //asi accedo al tercer elemento del array
console.log(b[3][2]); //con esto accedo al cuarto elemento, es decir el array, y ahi selecciono el tercer elemento que es la "C"

console.log(b[3][3][4]); //con esto accedo al cuarto elemento, es decir el array, y ahi selecciono el cuarto elemento que es otro array y luego accedo al elemento 4 que seria el numero 5
let hola = "hola";
const c = Array.of("X", "Z", 8, 9, hola); // otra forma de hacer un array desde el 2015
console.log(c);

const d = Array(100).fill(false); //aca le pido crear un array con 100 elementos y que llene esos elementos con el valor false
console.log(d);

//Formas antiguas de definir arreglos que ya no se usan:
const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, 4, 5, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

//METODO PUSH: agrego valor al final
colores.push("negro");

//METODO POP: quita el ultimo elemento
colores.pop();
console.log(colores);

//METODO forEach
//recibe una funcion
colores.forEach(function (el, i) {
  //el index se refiere al numero de recorrida
  //el "el" se refiere a elemento q estar iterando
  console.log(`<li>${i}</li>${el}`); // el li es para htlm, se refiere a lista
});
// Los arreglos tienen muchos metodos. Se pueden ver en MDN

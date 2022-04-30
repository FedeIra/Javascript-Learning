
    function sum (a, b){
        return a + b;
        
    }

    console.log(sum(2,5)); // el console log es para q te escriba en el output el resultado. Algo parecido al print
    

    function deja_de_repetir_esto_man (a, b){
        console.log(a+b);
    
    } // la funcion sirve para juntar codigo q voy a usar varias veces
    
    deja_de_repetir_esto_man (2, 3);


   //var nombre = "Francisco"
    function saluda_nombre (){
        var nombre2 = "Federico"; // el federico va a tener prioridad sobre el francisco pq esta definido dentro de la funcion. 
        
        console.log("Hola "+ nombre2); // ademas, federico no va a poder ser accesible fuera de la funcion.

    }


// console.log(nombre2) // aca me va a imprimir francisco o nada si no defini la variable nombre fuera de la funcion

 saluda_nombre(); // aca esty invocando la funcion

// hay varias formas de hacer funciones 

function primero_forma (){}

var segunda_forma = function(){};

var tercera_forma = () => {};

// Otro ejemplo:

function ejemplo(nombre) {
    console.log("hola tu nombre es " , nombre); // se puede concatenar con coma y +, aunque en general se usa +       
}

var mi_nombre = "Federico";

ejemplo(mi_nombre);


console.log(`hola tu nombre es ${mi_nombre} `); // el $ solo sirve con `` , no sirve con "", tampoco con '' OJO CON ESTO. Es la tecla ~, pero sin shift

console.log(`hello world ${x} times`);


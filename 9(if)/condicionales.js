/* de prueba
function basico_condicionales (){
    edad = prompt(Number("State your age"));

    if (edad < 18) {
        console.log("You shall not pass!");   
    }
    return console.log("You can pass")
}

basico_condicionales() */

function condicional(age){
    if (age>18) {
        return true;
    }
    return false;
}

console.log(condicional(20));

if (true){
    console.log("Hola")

}

// va a retornar hola

if (false){
    console.log("Hola")

}

// no va a retornar nada, va a tirar undefined

function elegi_clase (clase) {

if (clase == "sorcerer"){
    console.log("Nice class")

} else if (clase == "mage"){
    console.log("meh")
} else {
    console.log("you suck")
}}

elegi_clase("mage")
//Callback: es una funcion q le puedes pasar a otra como argumento y se ejecuta despues de que haya transcurrido cualquier otra operacion o alguna. No necesariamente es un tema de sincronia.

function modify(array, callback) {
  // hacemos algo...
  array.push("fede");
  // despues de hacer algo...
  callback();
}
// el callback puede o no recibir argumento

const names = ["fede", "agus", "tomi"];

modify(names, function () {
  console.log(
    `he modificado el array! y ahora es de ${array.length} elementos!`
  );
}); // le estoy agregando como parametro esta funcion que ocupa el parametro de callback.

//reduce, map y forEach son todos callbacks. Es una funcion que se pasa a otra como argumento y se ejecuta despues de q se haya completado una cosa

const callback = (name) => console.log(name);

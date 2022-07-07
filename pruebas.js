// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  /*   records[id].tracks = [];
  records[id].tracks.push(value);
  return records[id]; */
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  } else if (prop == "tracks" && records[id].hasOwnProperty(prop) == false) {
    records[id].tracks = [];
    records[id].tracks.push(value);
  } else if (prop == "tracks" && value !== "") {
    records[id].tracks.push(value);
  } else if (value == "") {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
/*

1) Crear if y elifs que tengan los siguientes escenarios:

a) Si el valor de la funcion prop no es tracks y el valor value no es una string vacia, fijar la propiedad que dice prop al valor value:
if (prop != "tracks" && value =! "") {
  records[id][prop] = value;
}

b) si prop es igual a tracks, y el objeto no tiene la propiedad tracks, crear una propiedad con el valor de prop q sea igual a un array vacio, y luego agregarle el value.
else if (prop == "tracks" && records[id].tracks == false) {
  records[id][prop] = [];
  records[id][prop].push(value);
}

c) si prop es igual a tracks y value no es una string vacia, agregar value al final del array de tracks del objeto:
else if (prop == "tracks" && value !== "") {
   records[id].tracks.push(value);
}

d) si value es una string vacia, eliminar la propiedad que diga la prop del objeto:
else if (value == "") {
  delete records[id][prop];
}

2)   La funcion tiene que retornar la totalidad del objeto:   
return records[id];
*/

let posts = [
  {
    author: 'Juan',
    title: 'Kite',
    contents: 'Buenas',
    id: 1,
  },
  {
    author: 'Fede',
    title: 'guerra',
    contents: 'ponele',
    id: 2,
  },
  {
    author: 'nacho',
    title: 'Titulo',
    contents: 'Contenido',
    id: 3,
  },
  {
    author: 'jp',
    title: 'estudio',
    contents: 'saludos',
    id: 4,
  },
  {
    author: 'Fede',
    title: 'paz',
    contents: 'cuando',
    id: 5,
  },
];

let author = 'hola';

// let result = posts.find((element) => element.author === author);

// console.log(result);

let result2 = posts.filter((element) => element.author === author);

console.log(result2.length);

let newPosts = posts.map((post, index, array) =>
  result2.includes(post) ? array.splice(index, 1) : post
);
// const result = posts.filter(
//   (element) => element.author === busqueda
//  );

// const result = posts.findIndex((post) => post.id == busqueda);
// console.log(result);

// posts[result].title = 'cambie el titulo';
// console.log(posts[3]);

// posts.splice(busqueda-1, 1);

console.log(result2);

console.log(posts);

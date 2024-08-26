let movies = ["big fish", "batman", "leperchaun"];
let firstMovie = movies[0]
console.log(firstMovie);
console.log(movies.length);

let batman = 'batman'
let b = batman[0];

movies[1] = 'batman'
movies[movies.length] = '';
movies[10] = 'Deadpool'
console.log(movies[6]);
console.log(movies);
movies.length = 3
console.log(movies);

for (let i = 0; i < movies.length; i++) {
  console.log(`I really like the movie ${movies[i]}`);
}



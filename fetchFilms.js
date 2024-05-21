const movies = [
 {
  id: 'clw692bbc000568fwng9jqucp',
  title: 'Possession: Kerasukan',
  poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/171229180745163_287x421.jpg'
 },
 {
  id: 'clw692bbc000e68fw4v65uewe',
  title: 'Menjelang Ajal',
  poster: 'https://cdn.idntimes.com/content-images/post/20240320/img-5285-cc55ff00508c0f7986bd60cbccc30d67.jpeg'
 },
 {
  id: 'clw692bbc000268fwb1jc5s82',
  title: 'The Architecture of Love (TAOL)',
  poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/171229069497776_287x421.jpg'
 },
 {
  id: 'clw692bbc000668fwxu62m2jj',
  title: 'Dua Hati Biru',
  poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/17109994074491_287x421.jpg'
 },
 {
  id: 'clw692bbc000b68fweh73wlec',
  title: 'Siksa Kubur',
  poster: 'https://upload.wikimedia.org/wikipedia/id/b/bf/Poster_Siksa_Kubur.jpg'
 },
 {
  id: 'clw692bbc000d68fw11h8ksu8',
  title: 'Mukidi',
  poster: 'https://tugumalang.id/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-15-at-10.56.28.jpeg'
 },
 {
  id: 'clw692bbc000168fwa8t0rmmm',
  title: 'Badarawuhi di Desa Penari',
  poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/171196601780400_287x421.jpg'
 }
];

const filmContainer = document.getElementById('film-container');

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  const movieItem = document.createElement('div');
  movieItem.classList.add('swiper-slide', 'box');

  const movieImg = document.createElement('div');
  movieImg.classList.add('box-img');

  const movieLink = document.createElement('a');
  movieLink.href = "https://youtube.com"; // tuk sementara youtube aza

  const moviePoster = document.createElement('img');
  moviePoster.src = movie.poster;
  moviePoster.alt = `${movie.title} poster`;

  movieLink.appendChild(moviePoster);
  movieImg.appendChild(movieLink);

  const movieTitle = document.createElement('h3');
  movieTitle.textContent = movie.title;

  movieItem.appendChild(movieImg);
  movieItem.appendChild(movieTitle);

  filmContainer.appendChild(movieItem);
}

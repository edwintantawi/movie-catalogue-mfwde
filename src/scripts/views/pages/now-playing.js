import TheMovieDbSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
      <h2>Now Playing</h2>
    `;
  },
  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.info(movies);
  },
};

export default NowPlaying;
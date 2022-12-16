import Home from './pages/home';
import BackgroundImage from '../src/bg.jpeg'

import './App.css';
import { useState } from 'react';
import DetailPage from './pages/detail';

function App() {
  const [movie, setMovie] = useState({});

  const handleShowMovieDetailPage = (movieData: {}) => {
    setMovie(movieData)
  }

  return (
    <div className="App">
      <img src={BackgroundImage} style={{
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        filter: 'blur(2px)'
      }} />
      <Home onSearch={handleShowMovieDetailPage} />

      {/* @ts-ignore */}
      {movie && movie.Title && (
        // @ts-ignore
        <DetailPage movie={movie} />
      )}
    </div>
  );
}

export default App;

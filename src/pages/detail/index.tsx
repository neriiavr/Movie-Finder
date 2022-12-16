interface DetailPageProps {
    movie: {
        Title: string;
        Year: string;
        Plot: string;
        Poster: string;
        Actors: string;
        Director: string;
        Released: string;
        Genre: string;
        imdbRating: string;
        Awards: string;
        Writer: string;
    };
}

const DetailPage = ({ movie }: DetailPageProps) => {
  return (
    <div
      className="home-page"
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridGap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        maxWidth: '700px'
      }}>
        <img src={movie.Poster} alt="" />
        <div>
            <p>
                <b>{`Movie: `}</b>
                {movie.Title}
            </p>
            <p>
                <b>{`Director: `}</b>
                {movie.Director}
            </p>
            <p>
                <b>{`Actors: `}</b>
                {movie.Actors}
            </p>
            <p>
                <b>{`Writer: `}</b>
                {movie.Writer}
            </p>
            <p>
                <b>{`IMDB Score: `}</b>
                {movie.imdbRating}
            </p>
            <p>
                <b>{`Genre: `}</b>
                {movie.Genre}
            </p>
            <p>
                <b>{`Plot: `}</b>
                {movie.Plot}
            </p>
            <p>
                <b>{`Year: `}</b>
                {movie.Year}
                {` (Released: ${movie.Released})`}
            </p>
            {movie.Awards && (
                <p>
                    <b>{`Awards: `}</b>
                    {movie.Awards}
                </p>
            )}
        </div>
    </div>
  );
}

export default DetailPage;

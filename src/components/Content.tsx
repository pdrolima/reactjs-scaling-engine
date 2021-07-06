import { useEffect, useState } from 'react';
import { IGenreResponseProps, IMovieProps, IContentProps } from "../@types/common";
import { MovieCard } from './MovieCard';
import { api } from "../services/api"


export function Content({ selectedGenreId  }: IContentProps) {

  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseProps>({} as IGenreResponseProps);

    useEffect(() => {
        api.get<IMovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
            setMovies(response.data);
    });

        api.get<IGenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [selectedGenreId]);


  return (
    <div className="container">
        <header>
         <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
        <div className="movies-list">
            {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
        </div>
        </main>
    </div>
  )
}

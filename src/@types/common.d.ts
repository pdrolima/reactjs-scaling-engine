export interface IGenreResponseProps {
    id: number,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export interface ISidebarProps {
    handleClickButton(id: number): void,
    selectedGenreId: numer,
}

export interface IMovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface IContentProps {
    selectedGenreId: number;
}

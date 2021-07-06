import { useEffect, useState } from "react";
import { Button } from "./Button";
import { IGenreResponseProps, ISidebarProps } from "../@types/common";
import { api } from "../services/api"


export function SideBar({ handleClickButton, selectedGenreId }: ISidebarProps) {

   const [genres, setGenres] = useState<IGenreResponseProps[]>([]);

   useEffect(() => {
        api.get<IGenreResponseProps[]>('genres').then(response => {
            setGenres(response.data);
        });
   }, []);

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>

  )
}

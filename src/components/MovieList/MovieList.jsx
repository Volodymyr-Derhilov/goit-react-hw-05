import { useEffect, useState } from "react"
import css from "./MovieList.module.css"
import fetchMovies from "../../services/api";
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ films }) {
    const location = useLocation();
    return (
        <ul className={css.list}>
            {films.map(film => (
                <li key={film.id}>
                    <Link to={`/movies/${film.id}`} className={css.title} state={location}>
                        {film.title}
                    </Link>
                </li>
            ))}
        </ul>
    )

}
import { data } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList'
import fetchMovies from '../../services/api';
import css from './HomePage.module.css'
import { useEffect, useState } from "react"

export default function HomePage() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const { results } = await fetchMovies();
                setFilms(results)
            }
            catch(error) {
                console.log(error);
            }
        }
        getMovies()
    }, [])

    return (
        <div className={css.home}>
            <h2 className={css.title}>Trending today</h2>
            <MovieList films={films} />
        </div>
    )
}
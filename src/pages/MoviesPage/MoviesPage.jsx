import { use, useEffect, useState } from 'react'
import css from './MoviesPage.module.css'
import { FallingLines } from 'react-loader-spinner'
import { getMoviesByQuery } from '../../services/api';
import toast from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchedFilms, setSearchedFilms] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    const paramQuery = searchParams.get('query') ?? '';

    useEffect(() => {
        if (paramQuery) {
            setQuery(paramQuery);
        }

        const getMovies = async () => {
            try {
                setIsLoading(true);
                const { results } = await getMoviesByQuery(query);
                setSearchedFilms(results)
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false)
            }
        }
        getMovies()
    }, [query, paramQuery])

    function handleSubmit(e) {
        e.preventDefault()
        if (e.target.elements.term.value.trim() === '') {
            toast.error("Search term is required!");
            return;
        }

        setQuery(searchTerm);
        searchParams.set('query', searchTerm);
        setSearchParams(searchParams);
        e.target.reset();
    }

    return (
        <div className={css.movies}>
            <form onSubmit={handleSubmit} className={css.form}>
                <div className={css.input}>
                    <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className={css.form__input}
                    onInput={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    name='term'
                />
                <button type='submit' className={css.button}>Search</button>
                </div>
            </form>

            {isLoading && <FallingLines color="#3747ac" width="100" visible={true} ariaLabel="falling-circles-loading" />}

            <MovieList films={ searchedFilms} />
        </div>
    )
 }
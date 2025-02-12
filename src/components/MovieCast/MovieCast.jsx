import { useParams } from 'react-router-dom'
import css from './MovieCast.module.css'
import { use, useEffect, useState } from 'react';
import { getMovieCastById } from '../../services/api';
import clsx from 'clsx';

export default function MovieCast() {
    const { movie_id } = useParams();
    const [actors, setActors] = useState([]);
    const [page, setPage] = useState(0);
    const [max, setMax] = useState(page + 10);

    useEffect(() => {
        const getCast = async () => {
            try {
                const { cast } = await getMovieCastById(movie_id);
                setActors(cast)
            }
            catch (error)
            {
                console.log(error);
            }
        }
        getCast()
    }, [])

    function loadImg() {
        setPage(prev => prev + max + 1);
        setMax(prev => prev + 10);
        if (actors.length <= max) {
            
        }
    }

    return (
        <div className={css.cast__block}>
            <ul className={css.cast}>
                {
                    actors.slice(0, max).map((actor) => (
                        <li key={actor.id} className={css.cast__item}>
                            <div className={css.img__block}>
                                <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} className={ css.img} />
                            </div>
                            <p className={css.name}>{actor.original_name}</p>    
                            <p className={css.role}>Сharacter: { actor.character}</p>
                        </li>
                    ))
                }
            </ul>
            <button type='button' className={clsx(css.btn, {
                [css.hidden]: actors.length <= max,
            })} onClick={loadImg}>Load more</button>
        </div>
    )
}
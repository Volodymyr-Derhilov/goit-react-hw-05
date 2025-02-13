import { Suspense, useEffect, useRef, useState } from 'react';
import css from './MovieDetailsPage.module.css'
import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { getMovieById } from '../../services/api'
import { GoArrowLeft } from "react-icons/go";

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [details, setDetails] = useState([])

    const location = useLocation();
    const goBackURL = useRef(location?.state ?? '/movies')


    useEffect(() => {
        const getInfo = async () => {
            try {
                const data = await getMovieById(movieId);
                setDetails(data);
            }           
            catch (error) {
                console.log(error);
            }
        }
        getInfo()
    }, [movieId])

    return (
        <>
            <div className={css.main__info}>
                <button className={css.btn}><Link to={goBackURL.current} className={css.link}><GoArrowLeft />Go back</Link></button>
                <div className={css.block}>
                    <div className={css.all}>
                        <div className={css.img__block}>
                                <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt={`${details.title} image`} className={ css.img} />
                        </div>
                        <div className={css.text__block}>
                            <h3>{details.title} ({details.release_date ? details.release_date.slice(0, 4) : ""})</h3>
                            <p>User score: {details.popularity}</p>
                            <h4>Overview</h4>
                            <p>{details.overview}</p>
                            <h4>Genres</h4>
                            <p>{details.genres ? details.genres.map((genre) => `${genre.name} `) : ""}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.additional__block}>
                <h4>Additional information</h4>
                <nav className={css.addi__list}>
                    <li><Link className={css.addi__link} to='cast'>Cast</Link></li>
                    <li><Link className={css.addi__link} to='reviews'>Reviews</Link></li>
                </nav>
            </div>

            <div>
                <Suspense fallback={<h2>loading...</h2>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    )
}
import { useParams } from 'react-router-dom'
import css from './MovieReviews.module.css'
import { useEffect, useState } from 'react';
import { getMovieReviewsById } from '../../services/api';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const {results} = await getMovieReviewsById(movieId);
                setReviews(results);
            }
            catch (error) {
                console.log(error);
            }
        }
        getReviews()
    }, [movieId])

    return (        
        <div className={css.reviews}>{!reviews.length ? <h4>We don`t have any rewiews for this movie</h4> : 
            <ul className={css.list}>
                {
                    reviews.map(item => (
                        <li key={item.id} className={css.item}>
                            <h2>Author: {item.author}</h2>
                            <p>{ item.content}</p>
                        </li>
                        )
                    )
                }
            </ul>
        }</div>
    )
}
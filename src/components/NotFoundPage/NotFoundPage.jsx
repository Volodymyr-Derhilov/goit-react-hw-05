import { Link } from 'react-router-dom'
import css from './NotFoundPage.module.css'
import { IoIosHome } from "react-icons/io";


export default function NotFoundPage() {
    return (
        <div className={css.block}>
            <h2>Sorry! This page doesn't exist!</h2>
            <button className={css.btn}><Link to='/' className={css.link}><IoIosHome className={ css.icon} />Go Home</Link></button>
        </div>
     )
 }
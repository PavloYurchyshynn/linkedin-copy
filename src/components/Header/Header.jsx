import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerLogoInput}>
                <img src='https://image.flaticon.com/icons/png/512/174/174857.png' />
                <form>
                    <input type="text" className={style.headerInput} placeholder='Search' />
                </form>
            </div>
            <div className={style.headerNav}>
                <div className={style.item}>
                    <NavLink to='/home' activeClassName={style.active}>Home</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/mynetwork' activeClassName={style.active}>MyNetwork</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/jobs' activeClassName={style.active}>Jobs</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/dialogs' activeClassName={style.active}>Messaging</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
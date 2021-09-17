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
                    <NavLink to='/home' activeClassName={style.active}>
                        <img src="https://image.flaticon.com/icons/png/512/25/25694.png" />
                        <div>Home</div>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/mynetwork' activeClassName={style.active}>
                        <img src="https://image.flaticon.com/icons/png/512/681/681494.png" />
                        <div>MyNetwork</div>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/jobs' activeClassName={style.active}>
                        <img src="https://image.flaticon.com/icons/png/512/2910/2910791.png" />
                        <div>Jobs</div>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/dialogs' activeClassName={style.active}>
                        <img src="https://image.flaticon.com/icons/png/512/134/134718.png" />
                        <div>Messaging</div>
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/notifications' activeClassName={style.active}>
                        <img src="https://image.flaticon.com/icons/png/512/3602/3602123.png" />
                        <div>Notifications</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
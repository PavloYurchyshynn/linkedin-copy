import { NavLink } from 'react-router-dom';
import style from './NetworkManage.module.css'

function NetworkManage(props) {
    return (
        <div className={style.networkManage}>
            <p className={style.text}>Manage my network</p>
            <NavLink to='/mynetwork/connections'>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/880/880594.png" />
                    <div className={style.userConnections}>
                        <div>Connections</div>
                        <div>{props.connections.length}</div>
                    </div>
                </div>
            </NavLink>
            <div className={style.item}>
                <img src="https://image.flaticon.com/icons/png/512/1250/1250592.png" />
                Contacts
            </div>
            <div className={style.item}>
                <img src="https://image.flaticon.com/icons/png/512/456/456283.png" />
                People | Follow
            </div>
            <div className={style.item}>
                <img src="https://image.flaticon.com/icons/png/512/634/634013.png" />
                Groups
            </div>
            <div className={style.item}>
                <img src="https://image.flaticon.com/icons/png/512/1356/1356635.png" />
                Events
            </div>
            <div className={style.item}>
                <img src="https://image.flaticon.com/icons/png/512/1250/1250680.png" />
                Page
            </div>
            <div className={style.item}>
                <img src="https://image.flaticon.com/icons/png/512/2235/2235649.png" />
                Newsletters
            </div>
            <div className={style.item}>
                <img src="https://image.flaticon.com/icons/png/512/1/1533.png" />
                Hashtags
            </div>
        </div>
    );
}

export default NetworkManage
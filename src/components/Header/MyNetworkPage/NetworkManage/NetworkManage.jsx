import { connect } from 'react-redux';
import style from './NetworkManage.module.css'

function NetworkManage(props) {
    return (
        <div className={style.networkManage}>
            <p className={style.text}>Manage my network</p>
            <div className={style.item}>
                <img src="https://image.flaticon.com/icons/png/512/880/880594.png" />
                Connections
                <div className={style.userConections}>{props.userConections}</div>
            </div>
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

let mapStateToProps = (state) => ({
    userConections: state.homePage.profileInfo.userConections,
})

export default connect(mapStateToProps)(NetworkManage);
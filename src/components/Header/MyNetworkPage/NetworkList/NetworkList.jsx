import { connect, connectAdvanced } from 'react-redux';
import PageCard from './PageCard/PageCard';
import UserCard from './UserCard/UserCard';
import style from './NetworkList.module.css'
import { connectUser, disconnectUser, followPage, unfollowPage } from '../../../../redux/network-reducer';

function NetworkList(props) {

    let networkPages = props.networkPages;
    let networkUsers = props.networkUsers;

    let networkPagesElement = networkPages.map(e => <PageCard page={e} follow={props.followPage} unfollow={props.unfollowPage}/>)
    let networkUsersElement = networkUsers.map(e => <UserCard user={e} connect={props.connectUser} disconnect={props.disconnectUser}/>)

    return (
        <div>
            <div className={style.invitations}>
                <div>No pending invitations</div>
                <div>Manage</div>
            </div>
            <div className={style.networkList}>
                <div className={style.networkLogos}>
                    <div>People skilled in HTML also follow these pages</div>
                    <div>See all</div>
                </div>
                <div className={style.smallCards}>
                    {networkPagesElement}
                </div>
                <div className={style.networkLogos}>
                    <div>Software Engineers you may know</div>
                    <div>See all</div>
                </div>
                <div className={style.smallCards}>
                    {networkUsersElement}
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    networkPages: state.networkPage.networkPages,
    networkUsers: state.networkPage.networkUsers,
})

export default connect(mapStateToProps,
    {
        followPage,
        unfollowPage,
        connectUser,
        disconnectUser,
    }
)(NetworkList);
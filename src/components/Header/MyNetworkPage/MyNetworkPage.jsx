import NetworkList from "./NetworkList/NetworkList";
import NetworkManage from "./NetworkManage/NetworkManage";
import style from './MyNetworkPage.module.css'

function MyNetworkPage(props) {
    return (
        <div className={style.myNetwork}>
            <NetworkManage
                userConections={props.userConections}
            />
            <NetworkList
                networkPages={props.networkPages}
                networkUsers={props.networkUsers}
                followPage={props.followPage}
                unfollowPage={props.unfollowPage}
                connectUser={props.connectUser}
                disconnectUser={props.disconnectUser}
            />
        </div>
    );
}

export default MyNetworkPage;
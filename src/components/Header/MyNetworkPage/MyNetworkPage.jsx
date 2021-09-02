import NetworkList from "./NetworkList/NetworkList";
import NetworkManage from "./NetworkManage/NetworkManage";
import style from './MyNetworkPage.module.css'

function MyNetworkPage(props) {
    return (
        <div className={style.myNetwork}>
            <NetworkManage state={props.state}/>
            <NetworkList />
        </div>
    );
}

export default MyNetworkPage;
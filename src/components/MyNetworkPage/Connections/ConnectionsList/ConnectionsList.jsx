import style from './ConnectionsList.module.css'
import User from './User/User';

function ConnectionsList(props) {

    let users = props.connections;

    let connectionsElement = users.map(e => <User user={e} />)

    connectionsElement.splice(0,1)

    return (
        <div className={style.connectionsList}>
            {connectionsElement}
        </div>
    );
}

export default ConnectionsList;
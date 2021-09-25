import JobAdvertisement from '../../JobAdvertisement/JobAdvertisement';
import style from './Connections.module.css'
import ConnectionsList from './ConnectionsList/ConnectionsList';

function Connections(props) {
    return (
        <div className={style.connections}>
            <ConnectionsList connections={props.connections}/>
            <JobAdvertisement />
        </div>
    );
}

export default Connections;
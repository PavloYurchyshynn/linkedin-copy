import JobAdvertisement from '../../JobAdvertisement/JobAdvertisement';
import style from './Connections.module.css'
import ConnectionsList from './ConnectionsList/ConnectionsList';
import React, { useEffect } from 'react'

function Connections(props) {

    return (
        <div className={style.connections}>
            <ConnectionsList connections={props.connections} getConnections={props.getConnections}/>
            <JobAdvertisement />
        </div>
    );
}

export default Connections;
import { connect } from "react-redux";
import Connections from "./Connections";

const mapStateToProps = (state) => {
    return {
        connections: state.networkPage.connections,
    }
}

const ConnectionsContainer = connect(mapStateToProps)(Connections)


export default ConnectionsContainer;
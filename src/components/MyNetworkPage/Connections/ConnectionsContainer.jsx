import { connect } from "react-redux";
import Connections from "./Connections";

const mapStateToProps = (state) => {
    return {
        connections: state.profilePage.connections,
    }
}

const ConnectionsContainer = connect(mapStateToProps)(Connections)


export default ConnectionsContainer;
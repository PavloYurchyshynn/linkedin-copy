import { connect } from "react-redux";
import { getConnections } from "../../../redux/user-reducer";
import Connections from "./Connections";

const mapStateToProps = (state) => {
    return {
        connections: state.profilePage.connections,
    }
}

const ConnectionsContainer = connect(mapStateToProps,
    {
        getConnections,
    }
    )(Connections)


export default ConnectionsContainer;
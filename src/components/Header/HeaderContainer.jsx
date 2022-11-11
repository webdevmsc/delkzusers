import {connect} from "react-redux";
import React from 'react';
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";

const HeaderContainer = React.memo((props) => {
    return (
        <Header { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
    };
}


export default connect(mapStateToProps, { logout })(HeaderContainer);

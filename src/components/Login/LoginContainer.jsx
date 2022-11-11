import {connect} from "react-redux";
import React from 'react';
import Login from "./Login";
import {authorize} from "../../redux/auth-reducer";


const LoginContainer = React.memo((props) => {
    return (
        <Login { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { authorize })(LoginContainer);

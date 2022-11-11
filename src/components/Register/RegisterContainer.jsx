import {connect} from "react-redux";
import React from 'react';
import Register from "./Register";


const RegisterContainer = React.memo((props) => {
    return (
        <Register { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(RegisterContainer);

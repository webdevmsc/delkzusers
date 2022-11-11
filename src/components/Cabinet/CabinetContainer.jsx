import {connect} from "react-redux";
import React from 'react';
import Cabinet from "./Cabinet";

const CabinetContainer = React.memo((props) => {
    return (
        <Cabinet { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
}


export default connect(mapStateToProps, { })(CabinetContainer);

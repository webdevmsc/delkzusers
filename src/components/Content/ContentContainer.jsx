import {connect} from "react-redux";
import React from 'react';
import Content from "./Content";

const ContentContainer = React.memo((props) => {
    return (
        <Content { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(ContentContainer);

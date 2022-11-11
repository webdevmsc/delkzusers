import {connect} from "react-redux";
import React from 'react';
import NewPackage from "./NewPackage";

const NewPackageContainer = React.memo((props) => {
    return (
        <NewPackage { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(NewPackageContainer);

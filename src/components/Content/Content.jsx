import {Container, makeStyles, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Calculator from "../Calculator/Calculator";
import LoginContainer from "../Login/LoginContainer";
import RegisterContainer from "../Register/RegisterContainer";
import CabinetContainer from "../Cabinet/CabinetContainer";
import NewPackageContainer from "../NewPackage/NewPackageContainer";

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: '150px'
    },

}))

const Content = () => {
    const styles = useStyles();

    return (
        <Container className={styles.main}>
            <Routes>
                <Route path="/calculator" element={<Calculator/>}/>
                <Route path="/login" element={<LoginContainer/>}/>
                <Route path="/register" element={<RegisterContainer/>}/>
                <Route path="/cabinet" element={<CabinetContainer/>}/>
                <Route path="/newPackage" element={<NewPackageContainer/>}/>
            </Routes>
        </Container>
    )
}

export default Content;
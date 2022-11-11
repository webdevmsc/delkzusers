import {AppBar, Container, createTheme, makeStyles, ThemeProvider, Typography} from "@material-ui/core";
import HeaderContainer from "../Header/HeaderContainer";
import ContentContainer from "../Content/ContentContainer";
import {HashRouter} from "react-router-dom";

const theme = createTheme({

});

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

const Main = () => {
    const styles = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <div className={styles.main}>
                    <HeaderContainer/>
                    <ContentContainer/>
                </div>
            </HashRouter>
        </ThemeProvider>
    )
}


export default Main;
import {Button, makeStyles, TextField} from "@material-ui/core";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        '& > button': {
            marginBottom: '15px'
        }
    },
    field: {
        marginBottom: '15px',
    }
}))

const Login = ({ authorize }) => {
    const styles = useStyles();
    const handleAuth = () => {
        authorize();
        navigate('/')
    }
    const navigate = useNavigate();
    const handleGoToPage = (link) => navigate(link)
    return (
        <div className={styles.form}>
            <TextField value={'ivanov@mail.ru'} focused className={styles.field} fullWidth variant={'outlined'} label={'Почта'}/>
            <TextField focused value={'123123123'} type={'password'} className={styles.field} fullWidth variant={'outlined'} label={'Пароль'}/>
            <Button onClick={ handleAuth } color={'primary'} variant={'contained'}>Вход</Button>
            <Button onClick={ () => handleGoToPage('/register') } >Зарегистрироваться</Button>
        </div>
    )
}

export default Login;
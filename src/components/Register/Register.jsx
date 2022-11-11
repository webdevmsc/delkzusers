import {Button, makeStyles, TextField} from "@material-ui/core";
import {useFormik} from "formik";
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

const Register = () => {
    const styles = useStyles();
    const form = useFormik({
        initialValues: {
            email: '',
            lastName: '',
            firstName: '',
            fatherName: '',
            city: '',
            phone: '',
            password: '',
            passwordConfirm: ''
        }
    });
    const navigate = useNavigate();
    const getLabel = (value) => {
        switch (value) {
            case 'password':
                return 'Пароль'
            case 'passwordConfirm':
                return 'Подтверждение пароля'
            case 'email':
                return 'Почта'
            case 'firstName':
                return 'Имя'
            case 'lastName':
                return 'Фамилия'
            case 'fatherName':
                return 'Отчество'
            case 'city':
                return 'Город'
            case 'phone':
                return 'Телефон'
        }
    }
    return (
        <div className={styles.form}>
            {
                Object.keys(form.values).map(x => <TextField className={styles.field} fullWidth variant={'outlined'} id={x} name={x} label={getLabel(x)} value={form.values[x]}/>)
            }
            <Button variant={'contained'} color={'primary'} size={'large'} onClick={() => navigate('/')}>Подтвердить</Button>
        </div>
    )
}

export default Register;
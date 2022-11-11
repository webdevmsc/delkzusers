import {
    Button,
    Chip,
    Container,
    Grid,
    IconButton,
    makeStyles,
    MenuItem,
    Select,
    TextField, Tooltip,
    Typography
} from "@material-ui/core";
import {useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import * as React from 'react'
import Calculator from "../Calculator/Calculator";
import LoginContainer from "../Login/LoginContainer";
import RegisterContainer from "../Register/RegisterContainer";
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import CabinetContainer from "./CabinetContainer";
import {DataGrid} from "@mui/x-data-grid";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    main: {

    },
    menuItem: {
        marginBottom: '10px'
    },
    add: {
        marginRight: '10px'
    },
    address: {
        padding: '20px',
        borderRadius: '20px',
    },
    current: {
        fontWeight: 'bold',
        fontSize: '24px',
        marginBottom: '20px'
    },
    property: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    propertyName: {
        marginRight: '30px',
        width: '100px'
    },
    field: {
        marginRight: '10px'
    },
    chip: {
        padding: '6px 8px',
        borderRadius: '6px',
        color: 'white'
    },
    done: {
        backgroundColor: 'green'
    },
    inProgress: {
        backgroundColor: 'yellow',
        color: 'black'
    },
    review: {
        backgroundColor: 'blue'
    }
}))

const Cabinet = ({ user }) => {
    const styles = useStyles();

    const [value, setValue] = useState(4)

    const navigate = useNavigate();

    return (
        <Container className={styles.main}>
            <Grid container>
                <Grid item xs={3}>
                    <MenuItem onClick={() => setValue(4)} className={styles.menuItem}><Typography>Мой профиль</Typography></MenuItem>
                    <MenuItem onClick={() => setValue(0)} className={styles.menuItem}><Typography>Мои адреса</Typography></MenuItem>
                    <MenuItem onClick={() => setValue(1)} className={styles.menuItem}><Typography>Мои посылки</Typography></MenuItem>
                    <MenuItem onClick={() => setValue(2)} className={styles.menuItem}><Typography>Помощь с выкупом</Typography></MenuItem>
                    <MenuItem onClick={() => setValue(3)} className={styles.menuItem}><Typography>Транзакции</Typography></MenuItem>
                    <MenuItem onClick={() => navigate('/newpackage')} className={styles.menuItem}><AddIcon className={styles.add}/> <Typography>Добавить посылку</Typography></MenuItem>
                </Grid>
                <Grid item xs={9}>
                    <CabinetContent value={value} user={user}/>
                </Grid>
            </Grid>
        </Container>
    )
}

const CabinetContent = ({value, user}) => {
    switch (value) {
        case 0:
            return <Addresses/>
        case 1:
            return <Packages/>
        case 2:
            return <Help/>
        case 3:
            return <Transactions/>
        case 4:
            return <Profile user={user}/>
    }
}

const Addresses = () => {
    const styles = useStyles();
    return (
        <div className={styles.address}>
            <Typography className={styles.current}>Текущий адрес</Typography>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Address 1</Typography>
                <TextField variant={'outlined'} className={styles.field} value={'hello'}/>
                <Button color={'secondary'} size={'large'} variant={'contained'}>Копировать</Button>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Address 2</Typography>
                <TextField variant={'outlined'} className={styles.field} value={'hello'}/>
                <Button color={'secondary'} size={'large'} variant={'contained'}>Копировать</Button>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>City</Typography>
                <TextField variant={'outlined'} className={styles.field} value={'hello'}/>
                <Button color={'secondary'} size={'large'} variant={'contained'}>Копировать</Button>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>State</Typography>
                <TextField variant={'outlined'} className={styles.field} value={'hello'}/>
                <Button color={'secondary'} size={'large'} variant={'contained'}>Копировать</Button>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Zip code</Typography>
                <TextField variant={'outlined'} className={styles.field} value={'hello'}/>
                <Button color={'secondary'} size={'large'} variant={'contained'}>Копировать</Button>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Country</Typography>
                <TextField variant={'outlined'} className={styles.field} value={'hello'}/>
                <Button color={'secondary'} size={'large'} variant={'contained'}>Копировать</Button>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Phone</Typography>
                <TextField variant={'outlined'} className={styles.field} value={'hello'}/>
                <Button color={'secondary'} size={'large'} variant={'contained'}>Копировать</Button>
            </div>
        </div>
    )
}

const Packages = () => {
    const getLabel = (status) => {
        switch (status) {
            case 0:
                return 'Обработка'
            case 1:
                return 'В пути'
            case 2:
                return 'Доставлен'
        }
    }
    const styles = useStyles();
    const columns = [
        { field: 'track', headerName: 'Трек-номер', width: 200 },
        { field: 'inside', headerName: 'Содержимое', width: 200, renderCell: (params) => <IconButton><Tooltip title={<React.Fragment>
                {params.row.inside.map(x => <Typography>{x}</Typography>)}
            </React.Fragment>}><InfoIcon/></Tooltip></IconButton> },
        { field: 'status', headerName: 'Статус', width: 200, renderCell: (params) => <Chip className={clsx({
                [styles.done]: params.row.status === 2,
                [styles.inProgress]: params.row.status === 1,
                [styles.review]: params.row.status === 0
            }, styles.chip)} label={getLabel(params.row.status)}/> },
        { field: 'actions', headerName: ' ', renderCell: () => <div><Button>Страница заказа</Button></div>, width: 250 }
    ]
    const rows = [
        {
            id: 1,
            track: 'KZ-001002',
            inside: ['Футболка H&M', 'Кроссовки Adidas'],
            status: 0
        },
        {
            id: 2,
            track: 'KZ-002003',
            inside: ['Куртка', 'Худи'],
            status: 1
        },
        {
            id: 3,
            track: 'KZ-003004',
            inside: ['Что-то', 'Что-то еще'],
            status: 2
        },

    ]
    return (
        <DataGrid autoheight columns={columns} rows={rows}/>
    )
}

const Help = () => {
    return (
        <Typography>Help</Typography>
    )
}

const Transactions = () => {
    return (
        <Typography>Transactions</Typography>
    )
}

const Add = () => {
    return (
        <Typography>Add</Typography>
    )
}

const Profile = ({ user }) => {
    if (user === null) return <Typography>Необходимо авторизоваться</Typography>
    return (
        <div>
            <Typography><strong>Фамилия: </strong>{user.lastName}</Typography>
            <Typography><strong>Имя: </strong>{user.firstName}</Typography>
            <Typography><strong>Отчество: </strong>{user.fatherName}</Typography>
            <Typography><strong>Почта: </strong>{user.mail}</Typography>
            <Typography><strong>Телефон: </strong>{user.phone}</Typography>
        </div>
    )
}

export default Cabinet;
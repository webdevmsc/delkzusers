import {
    AppBar, Button,
    Container,
    createTheme, Divider,
    makeStyles,
    MenuItem,
    TextField,
    ThemeProvider,
    Typography
} from "@material-ui/core";
import HeaderContainer from "../Header/HeaderContainer";
import ContentContainer from "../Content/ContentContainer";
import {HashRouter} from "react-router-dom";
import {useState} from "react";

const theme = createTheme({

});

const useStyles = makeStyles(theme => ({
    main: {

    },
    property: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    field: {
        width: '300px',
        marginLeft: '20px'
    },
    propertyName: {
        fontSize: '20px',
        fontWeight: 'bold',
        width: '240px'
    },
    packages: {
        padding: '20px'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px'
    },
    deleteButton: {
        marginLeft: '20px'
    },
    addButton: {
        marginTop: '20px'
    },
    final: {
        display: 'flex',
        alignItems: 'center',
        '& > button': {
            marginLeft: '20px'
        }
    },
    finalWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    sum: {
        fontSize: '24px'
    }
}))

const NewPackage = () => {
    const styles = useStyles();
    const [packages, setPackages] = useState([
        {
            name: 'iPhone 14',
            price: 800,
            currency: 0
        }
    ])

    const handleChange = (index, field, event) => {
        const packagesList = [...packages]
        packagesList[index][field] = event.target.value;
        setPackages(packagesList)
    }

    const handleAddItem = () => {
        const packagesList = [...packages, { name: null, price: 0, currency: 0 }]
        setPackages(packagesList)
    }

    const handleDelete = (index) => {
        const packagesList = [...packages]
        packagesList.splice(index, 1)
        setPackages(packagesList);
    }

    const getSum = (array) => {
        let sum = 0;

        for (let index = 0; index < array.length; index++) {
            sum += array[index];
        }
        return sum
    }

    return (
        <div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Страна отправки</Typography>
                <TextField className={styles.field} fullWidth value={0} variant={'outlined'} select>
                    <MenuItem value={0}>США</MenuItem>
                    <MenuItem value={1}>Что-то еще</MenuItem>
                </TextField>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Страна доставки</Typography>
                <TextField className={styles.field} fullWidth value={0} variant={'outlined'} select>
                    <MenuItem value={0}>Казахстан</MenuItem>
                    <MenuItem value={1}>Что-то еще</MenuItem>
                </TextField>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Город доставки</Typography>
                <TextField className={styles.field} fullWidth value={0} variant={'outlined'} select>
                    <MenuItem value={0}>Алматы</MenuItem>
                    <MenuItem value={1}>Что-то еще</MenuItem>
                </TextField>
            </div>
            <div className={styles.property}>
                <Typography className={styles.propertyName}>Номер трекинга</Typography>
                <TextField className={styles.field} fullWidth value={'KZ-001002003'} variant={'outlined'}></TextField>
            </div>
            <Divider/>
            <div className={styles.packages}>
                {packages.map((x, index) =>
                    <div className={styles.item}>
                        <Typography>Товар {index + 1}</Typography>
                        <TextField onChange={ (event) => handleChange(index, 'name', event) } className={styles.field} label={'Наименование'} variant={'outlined'} value={x.name}/>
                        <TextField type={'number'} onChange={ (event) => handleChange(index, 'price', event) } className={styles.field} label={'Стоимость'} variant={'outlined'} value={x.price}/>
                        <TextField onChange={ (event) => handleChange(index, 'currency', event) } select className={styles.field} label={'Валюта'} variant={'outlined'} value={x.currency}>
                            <MenuItem value={0}>USD</MenuItem>
                            <MenuItem value={1}>EUR</MenuItem>
                            <MenuItem value={2}>KZT</MenuItem>
                            <MenuItem value={3}>RUB</MenuItem>
                        </TextField>
                        <Button onClick={() => handleDelete(index) } className={styles.deleteButton} size={'large'} variant={'contained'} color={'secondary'}>Удалить</Button>
                    </div>)}
                <div className={styles.finalWrapper}>
                    <Button onClick={handleAddItem} className={styles.addButton} variant={'text'} size={'large'} color={'primary'}>Добавить товар</Button>
                    <div className={styles.final}>
                        <div><Typography className={styles.sum}><strong>
                            {getSum(packages.map(x => parseInt(x.price)))}
                        </strong> USD</Typography></div>
                        <Button variant={'contained'} color={'primary'} size={'large'}>Отправить заявку</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewPackage;
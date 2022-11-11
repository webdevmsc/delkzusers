import {makeStyles, MenuItem, TextField, Typography} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles(theme => ({
    field: {
        width: '300px',
        marginRight: '20px'
    },
    count: {
        fontWeight: 'bold'
    },
    links: {
        display: 'flex',
        '& > p': {
            marginRight: '15px'
        }
    },
    calculator: {
        marginTop: '10px',
    },
    calculatorHeader: {
        marginBottom: '20px'
    },
    value: {
        fontWeight: 'bold',
        fontSize: '36px'
    },
    forms: {
        display: 'flex'
    }
}))

const Calculator = () => {
    const styles = useStyles();
    const [value, setValue] = useState(null)
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <div>
            <div className={styles.calculator}>
                <div className={styles.calculatorHeader}>
                    <Typography className={styles.count} variant={'h4'}>Рассчет стоимости</Typography>
                </div>
                <div className={styles.forms}>
                    <TextField label={'Страна'} className={styles.field} fullWidth variant={'outlined'} select value={0}>
                        <MenuItem value={0}>США</MenuItem>
                        <MenuItem value={1}>Что-то еще</MenuItem>
                    </TextField>
                    <TextField className={styles.field} label={'Вес, кг.'} fullWidth variant={'outlined'} value={value} onChange={handleChange}/>
                    <div>
                        <Typography className={styles.value}>{value * 13} $</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
import {AppBar, Button, Container, Divider, makeStyles, Typography} from "@material-ui/core";
import image from '../../images/delkz.png'
import {useNavigate} from "react-router-dom";
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const useStyles = makeStyles(theme => ({
    logo: {
        height: '100%',
        width: '130px',
        borderRadius: '20px'
    },
    header: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    log: {
        display: 'flex',
        alignItems: 'center'
    },
    cabinet: {
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    actions: {
        display: 'flex',
        alignItems :'center',
        '& > button': {
            marginLeft: '10px'
        }
    },
    divider: {
        height: '20px',
        margin: '0 10px',
        paddingTop: '16px'
    },
    links: {
        display: 'flex'
    },
    phone: {
        color: 'black',
        fontSize: '20px',
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    link: {
        padding: '10px',
        transitionDuration: '0.3s',
        cursor: 'pointer',
        '&:hover': {
            color: 'red'
        }
    },
    headerBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    phoneLink: {
        textDecoration: 'none',
        marginLeft: '10px'
    },
    phoneWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    wallet: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px',
        '& > p': {
            marginLeft: '5px'
        }
    }
}))

const Header = ({ authorized, logout }) => {
    const styles = useStyles();

    const links = [
        {
            to: '/',
            label: 'Главная',
        },
        {
            to: '/about',
            label: 'О нас'
        },
        {
            to: '/shops',
            label: 'Популярные магазины'
        },
        {
            to: '/process',
            label: 'Как это работает'
        },
        {
            to: '/help',
            label: 'Поможем выкупить'
        },
        {
            to: '/contacts',
            label: 'Контакты'
        },
    ]

    const navigate = useNavigate();

    const handleGoToPage = (link) => {
        navigate(`${link}`)
    }

    return (
        <div>
            <AppBar elevation={2} color={'transparent'} className={styles.appBar}>
                <Container>
                    <div className={styles.header}>
                        <img className={styles.logo} src={image}/>
                        <div className={styles.actions}>
                            {
                                authorized ?
                                    <div className={styles.log}>
                                        <Typography onClick={ () => handleGoToPage('/cabinet')} className={styles.cabinet}>Личный кабинет</Typography>
                                        <div className={styles.wallet}>
                                            <AccountBalanceWalletIcon/>
                                            <Typography>555.52 $</Typography>
                                        </div>
                                        <Divider className={styles.divider} orientation={'vertical'}/>
                                        <Button onClick={logout}>Выйти</Button>
                                    </div>
                                    :
                                    <div className={styles.log}>
                                        <Button onClick={() => handleGoToPage('/login')}>Войти</Button>
                                        <Divider className={styles.divider} orientation={'vertical'}/>
                                        <Button onClick={() => handleGoToPage('/register')}>Зарегистрироваться</Button>
                                    </div>
                            }
                            <Button onClick={ () => handleGoToPage('/calculator') } variant={'contained'} color={'secondary'}>Расчет доставки</Button>
                        </div>
                    </div>
                    <Divider/>
                    <div className={styles.headerBottom}>
                        <div className={styles.links}>
                            {links.map(x => <Typography className={styles.link} onClick={() => handleGoToPage(x.to)}>{x.label}</Typography>)}
                        </div>
                        <div className={styles.phoneWrapper}>
                            <PhoneInTalkIcon/>
                            <a className={styles.phoneLink} href={'tel:+77777777777'}><Typography className={styles.phone}>+77777777777</Typography></a>
                        </div>
                    </div>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header;
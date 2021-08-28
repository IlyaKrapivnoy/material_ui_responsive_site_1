import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    makeStyles,
    Typography,
} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TouchAppIcon from '@material-ui/icons/TouchApp';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        paddingTop: 80,
    },
    sidebarTop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottom: '1px solid #eee',
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginBottom: 20,
    },
    userInfo: { textAlign: 'center', marginBottom: 20 },
    userMail: { fontWeight: 500, marginBottom: 2 },
    account: { color: '#5a5ffb', cursor: 'pointer' },
    sidebarMenu: { padding: '30px 20px' },
    item: {
        display: 'flex',
        padding: '10px 0',
        cursor: 'pointer',
        '&:hover': {
            color: '#7d7d7d',
        },
    },
    itemIcon: { paddingRight: 16 },
    itemText: {
        fontWeight: '500',
    },

    accordionSummary: {
        padding: 0,
        margin: 0,
    },
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <Box className={classes.sidebarTop}>
                <Avatar
                    alt='User Picture'
                    src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
                    square
                    className={classes.avatar}
                />
                <Box className={classes.userInfo}>
                    <Typography className={classes.userMail}>
                        usermail@gmail.com
                    </Typography>
                    <Typography className={classes.account}>
                        Premium Account
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.sidebarMenu}>
                <Typography
                    variant='caption'
                    display='block'
                    gutterBottom
                    className={classes.caption}
                >
                    Reports
                </Typography>
                <div className={classes.item}>
                    <ShoppingBasketIcon className={classes.itemIcon} />
                    <Typography className={classes.itemText}>
                        Products
                    </Typography>
                </div>
                <Accordion
                    style={{
                        boxShadow: '0 0 0 0',
                        margin: 0,
                        position: 'static',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        className={classes.accordionSummary}
                    >
                        <div
                            className={classes.item}
                            style={{ padding: 0, margin: 0 }}
                        >
                            <EqualizerIcon className={classes.itemIcon} />
                            <Typography className={classes.itemText}>
                                Statistics
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding: '0 16px 10px' }}>
                        <div className={classes.item}>
                            <DescriptionIcon className={classes.itemIcon} />
                            <Typography className={classes.itemText}>
                                2021
                            </Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <div className={classes.item}>
                    <TouchAppIcon className={classes.itemIcon} />
                    <Typography className={classes.itemText}>
                        Partnership
                    </Typography>
                </div>
                <div className={classes.item}>
                    <BookmarkBorderIcon className={classes.itemIcon} />
                    <Typography className={classes.itemText}>Others</Typography>
                </div>
            </Box>
            <Box className={classes.sidebarMenu}>
                <Typography
                    variant='caption'
                    display='block'
                    gutterBottom
                    className={classes.caption}
                >
                    Applications
                </Typography>
                <Accordion
                    style={{
                        boxShadow: '0 0 0 0',
                        margin: 0,
                        position: 'static',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        className={classes.accordionSummary}
                    >
                        <div
                            className={classes.item}
                            style={{ padding: 0, margin: 0 }}
                        >
                            <EqualizerIcon className={classes.itemIcon} />
                            <Typography className={classes.itemText}>
                                Platforms
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding: '0 16px 10px' }}>
                        <div className={classes.item}>
                            <GroupAddIcon className={classes.itemIcon} />
                            <Typography className={classes.itemText}>
                                Project Platform
                            </Typography>
                        </div>
                    </AccordionDetails>
                    <AccordionDetails style={{ padding: '0 16px 10px' }}>
                        <div className={classes.item}>
                            <GroupAddIcon className={classes.itemIcon} />
                            <Typography className={classes.itemText}>
                                Social Platform
                            </Typography>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    );
};

export default Sidebar;

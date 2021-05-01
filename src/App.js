
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';

import DashboardIcon from '@material-ui/icons/Dashboard';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GridOnIcon from '@material-ui/icons/GridOn';
import RoomIcon from '@material-ui/icons/Room';
import WidgetsIcon from '@material-ui/icons/Widgets';
import TimelineIcon from '@material-ui/icons/Timeline';
import DateRangeIcon from '@material-ui/icons/DateRange';

import SvgIcon from '@material-ui/core/SvgIcon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';  
import InputBase from '@material-ui/core/InputBase';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

import _ from 'underscore';
import { hot } from 'react-hot-loader/root';
import { setConfig  } from 'react-hot-loader';
import './scss/main.scss';

setConfig({/* 동작하지않고잇음 */
    reloadHooks: true,
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    backgroundColor: '#eee',
    color: '#3c4858'
  },
  imageIcon: {
    height: '100%',
    width: '100%'
  },
  iconRoot: {
    fontSize: '30px',
    marginLeft: '-4px',
    textAlign: 'center'
  },
  content:{
    backgroundColor: 'blue'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  menuButton:{
    marginRight: theme.spacing(2),
    boxShadow:'0 14px 26px -12px rgb(153 153 153 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(153 153 153 / 20%)'
  },
  hide: {
    display: 'none',
  },
  searchButton:{
    fontSize: '10px',
    marginRight: theme.spacing(4),
    boxShadow:'0 14px 26px -12px rgb(153 153 153 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(153 153 153 / 20%)'
  },
  title: {
    flexGrow: 1
  },
  appBarInit:{

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    width: `calc(100% - 56px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  search:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius
  },
  activeButton:{
    marginRight: theme.spacing(1)
  },
  inputRoot:{
    color: 'inherit',
    fontSize: '10px'
  },
  inputInput:{
    padding: theme.spacing(1,1,1,0)
  },
  search:{
    position: 'relative',
    '&:focus':{
      borderColor: '#9c27b0'
    },
    '&:hover':{
      borderColor: '#9c27b0'
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      marginLeft: theme.spacing(3),
      width: 'auto'
    },
    borderBottom: '1px solid #c1c1c1'
  },
  searchIcon:{
    padding: theme.spacing(0,2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawer:{
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerPaper:{
    width: drawerWidth,
    opacity: '.8',
    background: '#000',
    color: 'white',
    top: '0',
    width: '100%',
    height: '100%',
    display: 'block',
    zIndex: '3',
    position: 'absolute'
  },
  drawerBackgroundPaper:{
    height: "100%",
    backgroundImage: `url("/images/sidemenu_bg.jpg")`,
    zIndex: '1',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'block',
    transition: 'all 300ms linear',
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  drawerOpen: {
    width: drawerWidth+1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 130,
    height: 130,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () =>{
    setOpen(true);
  }
  
  const handleDrawerClose = () =>{
    setOpen(false);
  }
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        color="inherit"
        position="fixed"
        className={clsx(classes.appBarInit, {
          [classes.appBarShift]: open,
          [classes.appBar]: !open,
        })}
      >
          <Toolbar>
              <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="open drawer" 
                className={clsx(classes.menuButton)}
                onClick={open ?  handleDrawerClose : handleDrawerOpen}
              >
                <MoreVertIcon color='disabled' />
              </IconButton>
              <Typography className={classes.title}>
                Dashboard
              </Typography>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <IconButton className={classes.searchButton} aria-label="search" size="small">
                <SearchIcon  />
              </IconButton>
              <IconButton className={classes.activeButton} aria-label="dashbord" size="small">
                <DashboardIcon />
              </IconButton>
              <IconButton className={classes.activeButton} aria-label="notification" size="small">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton className={classes.activeButton} aria-label="person" size="small">
                <Badge badgeContent={4} color="secondary">
                  <PersonIcon />
                </Badge>
              </IconButton>
          </Toolbar>
      </AppBar>
      <Drawer
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        variant="permanent"
        anchor="left"
      >
        <Paper className={classes.drawerPaper}>
          <List>
              <ListItem button key='Creative Team'>
                <ListItemIcon>
                  <Icon className={classes.iconRoot}>
                    <img className={classes.imageIcon} src="/images/react-logo.svg" />
                  </Icon>
                </ListItemIcon>
                <ListItemText primary='Creative Team' />
              </ListItem>
          </List>
          <Divider light={true} />
          <List>
            {[{'Dashboard': <DashboardIcon color='primary'/>},
              {'Pages': <FilterHdrIcon color='primary'/>},
              {'Components': <ViewComfyIcon color='primary'/>},
              {'Forms': <AssignmentIcon color='primary'/>},
              {'Tables': <GridOnIcon color='primary'/>},
              {'Maps': <RoomIcon color='primary'/>}
            ].map((obj) => (
              <ListItem button key={_.keys(obj)[0]}>
                <ListItemIcon>{_.values(obj)[0]}</ListItemIcon>
                <ListItemText primary={_.keys(obj)[0]} />
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            {[{'Widgets': <WidgetsIcon color='primary'/>}, 
              {'Charts': <TimelineIcon color='primary'/>}, 
              {'Calendar': <DateRangeIcon color='primary'/>}
            ].map((obj) => (
              <ListItem button key={_.keys(obj)[0]}>
                <ListItemIcon>{_.values(obj)[0]}</ListItemIcon>
                <ListItemText primary={_.keys(obj)[0]} />
              </ListItem>
            ))}
          </List>
        </Paper>
        <div className={classes.drawerBackgroundPaper}></div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="/images/sidemenu_bg.jpg" />
                </ButtonBase>
              </Grid>
            </Grid>
          </Paper>
        
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
    </div>
  );
}

export default hot(App);
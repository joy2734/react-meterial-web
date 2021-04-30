
import React from 'react';
// import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SvgIcon from '@material-ui/core/SvgIcon';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Badge from '@material-ui/core/Badge';  
import InputBase from '@material-ui/core/InputBase';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { hot } from 'react-hot-loader/root';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: '#eee',
    color: '#3c4858'
  },
  content:{
    backgroundColor: 'blue'
  },
  toolbar: {
    backgroundColor: 'green'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton:{
    marginRight: theme.spacing(2),
    boxShadow:'0 14px 26px -12px rgb(153 153 153 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(153 153 153 / 20%)'
  },
  title: {
    flexGrow: 1
  },
  appbar:{
    backgroundColor: 'transparent',
    color: '#555555'
  },
  search:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius
  },
  activeButton:{

  },
  search:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover':{
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
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
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu" size="small">
                  <SvgIcon color="disabled">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </SvgIcon>
                </IconButton>
                <Typography className={classes.title}>
                  Dashboard
                </Typography>
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <IconButton edge="end" className={classes.menuButton} aria-label="dashbord" size="small">
                    <SearchIcon  />
                  </IconButton>
                </div>
                <IconButton edge="end" className={classes.activeButton} aria-label="dashbord" size="small">
                  <DashboardIcon />
                </IconButton>
                <IconButton edge="end" className={classes.activeButton} aria-label="notification" size="small">
                  <NotificationsIcon />
                </IconButton>
                <IconButton edge="end" className={classes.activeButton} aria-label="person" size="small">
                  <PersonIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
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
        </Typography>
      </main>
    </div>
  );
}

export default hot(App);
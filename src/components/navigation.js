import React from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import { store } from '../store/navigation';
import { saveNavigationIndicator } from '../actions/navigation';

import Contribs from './Contribs';
import Error from './Error';
import Guidelines from './Guidelines';
import SemiPlanter from './Semi';
import SimplePlanter from './Simple';


const NavTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 50,
            width: '100%',
            backgroundColor: '#666',
        },
    },
})((props) => <Tabs {...props} centered TabIndicatorProps={{ children: <div /> }} />);


const NavTab = withStyles((theme) => ({
    root: {
        textTransform: 'initial',
        color: 'black',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(17),
        fontFamily: [
            "HelveticaNeue-Light", 
            "Helvetica Neue Light", 
            "Helvetica Neue", 
            "Helvetica", 
            "Arial", 
            "Lucida Grande", 
            "sans-serif" 
        ].join(','),
        marginRight: theme.spacing(1),
        '&:focus': {
        opacity: 1,
        },
  },
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paddingTop: {
        paddingTop: theme.spacing(2),
    },
    
    paddingBottom: {
        paddingBottom: theme.spacing(4),
    },
    tabs: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
}));


function Navigation(props) {
    const classes = useStyles();
    const currentTab = props.history.location.pathname === "/" ? "/simple" : props.history.location.pathname;
    const [tab, setTab] = React.useState(currentTab);

    const handleTabChange = (event, selectedTab) => {
        setTab(selectedTab);
        store.dispatch(saveNavigationIndicator(selectedTab))
    };

    return (
        <BrowserRouter>
            <div className={classes.root}>
                <div className={classes.tabs}>
                    <NavTabs value={tab} onChange={handleTabChange}>
                        <NavTab value="/simple" label="simple" component={Link} to="/simple" />
                        <NavTab value="/semi" label="semi" component={Link} to="/semi" />
                        <NavTab value="/guidelines" label="guidelines" component={Link} to="/guidelines" />
                        <NavTab value="/contribs" label="contribs" component={Link} to="/contribs" />
                    </NavTabs>
                    <Switch>
                        <Route exact path="/" render={(props) => <SimplePlanter {...props} />} />
                        <Route exact path="/simple" render={(props) => <SimplePlanter {...props} />} />
                        <Route exact path="/semi" render={(props) => <SemiPlanter {...props} />} />
                        <Route exact path="/guidelines" render={(props) => <Guidelines {...props} />} />
                        <Route exact path="/contribs" render={(props) => <Contribs {...props} />} />
                        <Route component={Error} />
                    </Switch>
                    <Typography className={classes.paddingBottom} />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default Navigation;
import React from 'react';

import { store } from '../store/settings';
import { saveSettingsState } from '../actions/settings';

import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
    switcher:{
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
    },
}));


class SettingsPanel extends React.Component {
    render() {
        return (
            <div id="setting-panel">
                <Grid container direction="column" alignItems="center" justify="center">
                    <SettingSwitcher/>
                </Grid>
            </div>
        );
    }
}


function SettingSwitcher() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        alignment: store.getState().alignment,
        colour: store.getState().colour,
        subscript: store.getState().subscript,
        triangles: store.getState().triangles,
        enlarge: store.getState().enlarge,
      });

    const handleSwitchChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        
        const currentState = ({
            ...state, [event.target.name]: event.target.checked
        });
        store.dispatch(saveSettingsState(currentState));
    };

    return (
        <div className={classes.switcher} id="setting-switch">
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    control={
                        <Switch 
                            id="alignment"
                            size="small" 
                            checked={state.alignment}
                            onChange={handleSwitchChange} 
                            name="alignment"
                            color='primary'
                        />
                    }
                    label={<Typography variant="body2" color="textSecondary">alignment</Typography>}
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    control={
                        <Switch 
                            id="colour"
                            size="small" 
                            checked={state.colour}
                            onChange={handleSwitchChange} 
                            name="colour"
                            color='primary'
                        />
                    }
                    label={<Typography variant="body2" color="textSecondary">colour</Typography>}
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    control={
                        <Switch 
                            id="subscript"
                            size="small" 
                            checked={state.subscript}
                            onChange={handleSwitchChange} 
                            name="subscript"
                            color='primary'
                        />
                    }
                    label={<Typography variant="body2" color="textSecondary">subscript</Typography>}
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    control={
                        <Switch 
                            id="triangles"
                            size="small" 
                            checked={state.triangles}
                            onChange={handleSwitchChange} 
                            name="triangles"
                            color='primary'
                        />
                    }
                    label={<Typography variant="body2" color="textSecondary">triangles</Typography>}
                    labelPlacement="bottom"
                />
            </FormGroup>
        </div>
    );
}


export default SettingsPanel;
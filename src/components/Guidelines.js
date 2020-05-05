import React from 'react';
import Grid from '@material-ui/core/Grid';

 
const Guidelines = () => {
   return (
      <div id="guidelines">
          <Grid container spacing={3}>
          <Grid item xs={12}>
               <h3>Sooner or later</h3>
            </Grid>
            <Grid item xs={12}>
              <img src="/cf.png" width="200" height="200" alt="cfplanter-logo" ></img>
            </Grid>
          </Grid>
      </div>
    );
}
 

export default Guidelines;
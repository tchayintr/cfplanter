import React from 'react';
import Grid from '@material-ui/core/Grid';
 

const Error = () => {
   return (
      <div id="error">
          <Grid container spacing={3}>
            <Grid item xs={12}>
               <h3>Page does not exist</h3>
            </Grid>
         </Grid>
      </div>
    );

}
 
export default Error;
import React from 'react';
import Grid from '@material-ui/core/Grid';


class SemiPlanter extends React.Component {
    render() {
      return (
        <div id="contribs">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h3>Annotating along with artificial advisors</h3>
                    <p>Semi-automatic annotation</p>
                    <h3>Sooner or later</h3>
                    <h4><a href="https://ieeexplore.ieee.org/document/8442061">whitepaper</a></h4>
                </Grid>
                <Grid item xs={12}>
                    <img src="/cf.png" width="200" height="200" alt="cfplanter-logo" ></img>
                </Grid>
            </Grid>
      </div>
      );
    }
  }
  
  
  export default SemiPlanter;
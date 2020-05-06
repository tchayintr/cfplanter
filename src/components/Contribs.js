import React from 'react';
import Grid from '@material-ui/core/Grid';

 
const Contribs = () => {
   return (
      <div id="contribs">
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <h3><a href="https://github.com/tchayintr/cfplanter">CFPlanter</a></h3>
               <p>CFPlanter github repository</p>
            </Grid>
            <Grid item xs={12}>
               <h3><a href="https://aiat.or.th">AIAT</a></h3>
               <p>Artificial Intelligence Association of Thailand</p>
            </Grid>
            <Grid item xs={12}>
               <h3><a href="https://saki.siit.tu.ac.th/kindml/">KINDML</a></h3>
               <p>Knowledge Information & Data Management Laboratory at Sirindhorn International Institute of Technology</p>
            </Grid>
            <Grid item xs={12}>
               <h3><a href="http://lr-www.pi.titech.ac.jp/">Okumura-Takamura-Funakoshi Lab</a></h3>
               <p>Natural Language Processing Group at Tokyo Institute of Technology</p>
            </Grid>
            <Grid item xs={12}>
               <h3><a href="https://github.com/int2str/jssyntaxtree">jsSyntaxTree</a></h3>
               <p>Implementations based on modification of jsSyntaxTree</p>
            </Grid>
            <Grid item xs={12}>
               <img src="/cf.png" width="200" height="200" alt="cfplanter-logo" ></img>
            </Grid>
         </Grid>
      </div>
    );
}
 

export default Contribs;
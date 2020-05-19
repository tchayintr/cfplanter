import React from 'react';
import Grid from '@material-ui/core/Grid';

 
const Contribs = () => {
   return (
      <div id="contribs">
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <h3><a href="https://github.com/tchayintr/cfplanter" rel="noopener noreferrer" target="_blank">CFPlanter</a></h3>
               <p>CFPlanter github repository</p>
               <p><a href="https://ieeexplore.ieee.org/document/8442061" rel="noopener noreferrer" target="_blank">whitepaper</a></p>

            </Grid>
            <Grid item xs={12}>
               <h3><a href="https://aiat.or.th" rel="noopener noreferrer" target="_blank">AIAT</a></h3>
               <p>Artificial Intelligence Association of Thailand</p>
            </Grid>
            <Grid item xs={12}>
               <h3><a href="https://saki.siit.tu.ac.th/kindml/" rel="noopener noreferrer" target="_blank">KINDML</a></h3>
               <p>Knowledge Information & Data Management Laboratory at Sirindhorn International Institute of Technology</p>
            </Grid>
            <Grid item xs={12}>
               <h3><a href="http://lr-www.pi.titech.ac.jp/" rel="noopener noreferrer" target="_blank">Okumura-Takamura-Funakoshi Lab</a></h3>
               <p>Natural Language Processing Group at Tokyo Institute of Technology</p>
            </Grid>
            <Grid item xs={12}>
               <h3><a href="https://github.com/int2str/jssyntaxtree" rel="noopener noreferrer" target="_blank">jsSyntaxTree</a></h3>
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
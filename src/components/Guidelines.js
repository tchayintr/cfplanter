import React from 'react';
import Grid from '@material-ui/core/Grid';

 
const Guidelines = () => {
   return (
      <div id="guidelines">
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <div>
                  <h3>Modes definition</h3>
                  <p><i>simple</i>: Annotating with labeled bracket manually</p>
                  <p><i>semi</i>: Annotating along with artificial advisors</p>
                  <p><a href="https://ieeexplore.ieee.org/document/8442061" rel="noopener noreferrer" target="_blank">whitepaper</a></p>
                </div>
            </Grid>

            <Grid item xs={12}>
                <div>
                  <h4>Semi descriptions</h4>
                  <p><i>segment</i>: ฉันกินข้าว &#8594; ฉัน กิน ข้าว</p>
                  <p><i>tagging</i>: ฉัน กิน ข้าว &#8594; [PPRS ฉัน] [VACT กิน] [NCMN ข้าว]</p>
                  <p><i>parsing</i>: ฉันกินข้าว &#8594; [S [NP [PPRS ฉัน]] [VP [VACT กิน] [NP [NCMN ข้าว]]]]</p>
                </div>
            </Grid>

            <Grid item xs={12}>
                <div>
                  <h4>Common features</h4>
                  <p><i>Appearances</i>: alignment, colour, subscript, triangles</p>
                  <p><i>Download</i>: Click on the syntax tree image to download</p>
                  <p><i>Subscripting</i>: Add subscripts manually by using underscore e.g. [NCMN_s ต้นไม้]</p>
                  <p><i>Real-time</i>: Graph will update automatically in real-time</p>
                  <p><i>Spacing</i>: Add spaces in Nonterminal node by using double quote e.g. ["VACT ABC" ปลูก]</p>
                  <p><i>Unicode</i>: Support unicode fonts</p>
                </div>
            </Grid>

            <Grid item xs={12}>
              <h3>More will be revealed</h3>
            </Grid>

            <Grid item xs={12}>
              <img src="/cf.png" width="200" height="200" alt="cfplanter-logo" ></img>
            </Grid>
          </Grid>
      </div>
    );
}
 

export default Guidelines;
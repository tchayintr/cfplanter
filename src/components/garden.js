import React from 'react';
import SyntaxTree from './syntaxtree';


class Garden extends React.Component { 
  render() { 
    return (
      <div id="garden">
        <canvas id="canvas"><SyntaxTree/></canvas>
        <a type="hidden" id="link" href="/">link</a>
      </div>
    );
  }
}


export default Garden;
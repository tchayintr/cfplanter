import React from 'react';
import Tree from './tree'
// import rotateTip from './tip';

let tree = new Tree();

class SyntaxTree extends React.Component {
  handleTreeValue = () => {
    tree.setCanvas(getElement('canvas'));
    registerCallbacks();

    const query = decodeURI(window.location.search).replace('?', '');
    if (validatePhrase(query) == null) {
      getElement('lb').value = query;
    }
    parse();
  };
  
  componentDidMount() {
    this.handleTreeValue();
  };

  render() {
    return (
      <div>
      </div>
    );
  }
};


const bracketsOpen = (p) => {
  let o = 0;
  for (let c of p) {
    if (c === '[') ++o;
    if (c === ']') --o;
  }
  return o;
}

const getElement = (id) => {
  return document.getElementById(id);
};

const parse = () => {
  let phrase = getElement('lb').value.replace(/\s+/g, ' ');  // Replace all whitespace with spaces
  //eslint-disable-next-line
  phrase = phrase.replace(/ *([\[\]]) */g, '$1');  // Remove duplicate spaces

  let validation_error = validatePhrase(phrase);
  if (validation_error == null) {
    tree.parse(phrase);
    getElement('plant-error').innerHTML = '';
  } 
  else {
    getElement('plant-error').innerHTML = validation_error;
  }
}

const registerCallbacks = () => {
  getElement('lb').oninput = parse;

//   getElement('font').onchange = function() {
//     tree.setFont(getElement('font').value);
//     parse();
//   };

  // getElement('fontsize').onchange = function() {
  //   tree.setFontsize(getElement('fontsize').value);
  //   parse();
  // };

  getElement('alignment').onchange = function() {
    tree.setAlignBottom(getElement('alignment').checked);
    parse();
  }

  getElement('colour').onchange = function() {
    tree.setColor(getElement('colour').checked);
    parse();
  };

  // getElement('enlarge').onchange = function() {
  //   tree.setColor(getElement('enlarge').checked);
  //   parse();
  // };

  getElement('subscript').onchange = function() {
    tree.setSubscript(getElement('subscript').checked);
    parse();
  };

  getElement('triangles').onchange = function() {
    tree.setTriangles(getElement('triangles').checked);
    parse();
  };
    
  getElement('canvas').onclick = function() {
    tree.download();
  };
}

const validatePhrase = (p) => {
  if (p.length < 3) {
    return 'Labeled bracket is too short';
  }
  if (p[0] !== '[' || p[p.length - 1] !== ']') {
    return 'Labeled bracket must start with " [ " and end with " ] " ';
  }

  let brackets = bracketsOpen(p);
  if (brackets > 0) {
    return brackets + ' left square bracket(s) " [ " is still opening';
  }
  if (brackets < 0) {
    return Math.abs(brackets) + ' too many right square bracket(s) " ] "';
  }
  
  return null;
}


export default SyntaxTree;
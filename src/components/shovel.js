import React from 'react';

import { store } from '../store/shovel';
import { saveShovelState, saveShovelCursor } from '../actions/shovel';

import * as Constants from '../constants/shovel';


const countLines = (lines) => {
  return lines.split("\n").length;
};


class Shovel extends React.Component {
  // https://codepen.io/liborgabrhel/pen/eyzwOx
  constructor(props) {
    super(props);
    this.state = {
      value: store.getState().value,
      rows: store.getState().rows,
      minRows: store.getState().minRows,
      maxRows: store.getState().maxRows,
      placeholder: store.getState().placeholder,
      className: store.getState().className,
    };  
    this.states = []
  }

  componentDidMount() {
    this.handleInitRows();
  }

  componentWillUnmount() {
    const shovelTextarea = document.getElementById('lb');
    const currentCursor = {
      selectionStart: shovelTextarea.selectionStart,
      selectionEnd: shovelTextarea.selectionEnd,
    };

    store.dispatch(saveShovelCursor(currentCursor));
  }

  initCursor(event) {
    var tmp = event.target.value;
    event.target.value = '';
    event.target.value = tmp;

    const selectionStart = store.getState().selectionStart;
    const selectionEnd = store.getState().selectionStart;

    if (selectionStart && selectionEnd) {
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionEnd;
    }
    
  }

  handleValueProps = () => {
    this.props.handleShovelValueProps(this.state.value);
  }

  handleInitRows = () => {
    const element = document.getElementById('lb');
    const currentRows = (element.scrollHeight / Constants.TEXTAREA_LINE_HEIGHT);
    element.rows = currentRows;
  }

  getEventMinRows = (event) => {
    const lines = event.target.value;
    const numLines = countLines(lines);
    const minRows = numLines;
    return minRows;
  }


  handleChange = (event) => {
    const textareaLineHeight = Constants.TEXTAREA_LINE_HEIGHT;
    const maxRows = this.state.maxRows;
    const minRows = this.getEventMinRows(event);
    
    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea 
    
    const currentRows = (event.target.scrollHeight / textareaLineHeight);
    
    event.target.rows = currentRows;
        if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    
    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.setState({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });

    const currentState = {
      value: event.target.value,
      rows: event.target.rows,
    };

    store.dispatch(saveShovelState(currentState));
  }

  render() {
    return (
      <div id="shovel">
        <span id="plant-error"></span>
        <textarea
          id="lb"
          autoFocus
          onFocus={this.initCursor}
          rows={this.state.rows}
          value={this.state.value}
          placeholder={this.state.placeholder}
          className={this.state.className}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}


export default Shovel;
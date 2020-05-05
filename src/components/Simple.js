import React from 'react';

import Garden from './garden';
import SettingsPanel from './settings';
import Shovel from './shovel';


class SimplePlanter extends React.Component {
    render() {
      return (
        <div className="Simple">
            <SettingsPanel/>
            <div className="Shovel">
                <Shovel />
            </div>
            <div className="Garden">
                <Garden />
            </div>
        </div>
      );
    }
  }
  
  
  export default SimplePlanter;
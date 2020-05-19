import React from 'react';

import Garden from './garden';
import ServicesPanel from './services';
import SettingsPanel from './settings';
import Shovel from './shovel';


class SemiPlanter extends React.Component {
  render() {
    return (
      <div className="Semi">
          <SettingsPanel/>
          <ServicesPanel/>
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
  
  
  export default SemiPlanter;
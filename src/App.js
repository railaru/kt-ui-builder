import React, { Component } from 'react';
import './App.scss';

import DevicePreviewChanger from './Components/DevicePreviewChanger'
import Builder from './Components/Builder'


class App extends Component {
  render() {
    return (
      <div className="App">

        <div class="builder-wrapper">
            <div class="builder-wrapper__left">
                <div id="output--thumbnails"></div>
            </div>
            <div class="builder-wrapper__right">
                <div id='devicePreview' class="builder-wrapper__right__inner">
                    <div id="output--html"></div>
                </div>                
            </div>
        </div>

        <DevicePreviewChanger/>
      </div>
    );
  }
}

export default App;

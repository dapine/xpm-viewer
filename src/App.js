import React, { Component } from 'react';
import './App.css';
import { parseXPM } from './lib/xpm';

class App extends Component {
  getXPM(xpm) {
    try {
      return parseXPM(xpm);
    } catch (error) {
      return error.toString();
    }
  }

  render() {
    console.log(this.getXPM(`! XPM2
16 7 2 1
* c #000000
. c #ffffff
**..*...........
*.*.*...........
**..*..**.**..**
*.*.*.*.*.*..*.*
**..*..**.*...**
...............*
.............**.`));

    return (
      <div className="App">
        {/* <h1>{this.getVersion('! XPM2')}</h1> */}
      </div>
    );
  }
}

export default App;

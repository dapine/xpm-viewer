import React, { Component } from 'react';
import './App.css';
import { parseVersion, parseHeader, parseCharsColors, parsePixmap } from './lib/xpm';

class App extends Component {
  getVersion(XPMVersion) {
    let version;

    try {
      version = parseVersion(XPMVersion);
    } catch (error) {
      return error.toString();
    }

    return version;
  }

  getHeader(header) {
    let h;

    try {
      h = parseHeader(header);
    } catch (error) {
      return error.toString();
    }

    return h;
  }

  getCharsColors(charsColors) {
    let cc;

    try {
      cc = parseCharsColors(charsColors);
    } catch (error) {
      return error.toString();
    }

    return cc;
  }

  getPixmap(pixmap) {
    console.log(parsePixmap(pixmap));
  }

  render() {
    console.log(this.getCharsColors('* c #000000\n. c #ffffff'));
    this.getPixmap(`**..*...........
*.*.*...........
**..*..**.**..**
*.*.*.*.*.*..*.*
**..*..**.*...**
...............*
.............**.`);
    return (
      <div className="App">
        <h1>{this.getVersion('! XPM2')}</h1>
      </div>
    );
  }
}

export default App;

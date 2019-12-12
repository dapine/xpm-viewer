import React, { Component } from 'react';
import './App.css';
import Xpm from './components/Xpm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xpm: undefined,
    }
  }

  handleFileOnChange(file) {
    const handleFileRead = () => {
      this.setState({
        xpm: fileReader.result
      });
    }

    let fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type='file' id='file' accept='.xpm' onChange={e => this.handleFileOnChange(e.target.files[0])}></input>
        </div>
        <Xpm xpm={this.state.xpm}></Xpm>
      </div>
    );
  }
}

export default App;

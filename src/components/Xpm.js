import React, { Component } from 'react';
import { parseXPM } from '../lib/xpm';

import Wrapper from './Wrapper';

import '../App.css';

class Xpm extends Component {
    constructor(props) {
        const empty = {
            version: '',
            header: [],
            charColors: [],
            pixmap: []
        }

        super(props);
        this.state = {
            xpm: empty,
            pixelSize: 20
        }
    }

    getXpm(xpm) {
        return parseXPM(xpm);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.xpm !== this.props.xpm) {
          try {
            this.setState({xpm: this.getXpm(this.props.xpm)});
          } catch (err) {
            this.setState({ error: err });
          }
        }
    }

    render() {
        if (this.state.error) {
          return (
            <div className="error">
              <h1>{this.state.error.toString()}</h1>
            </div>
          )
        }

        return (
            <Wrapper pixelSize={this.state.pixelSize} charsPerPixel={this.state.xpm.header.charsPerPixel}
                width={this.state.xpm.header.width} height={this.state.xpm.header.height}
                charColors={this.state.xpm.charColors} pixmap={this.state.xpm.pixmap}></Wrapper>
        );
    }
}

export default Xpm;

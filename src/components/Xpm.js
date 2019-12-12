import React, { Component } from 'react';
import { parseXPM } from '../lib/xpm';

import Wrapper from './Wrapper';

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
            pixelScale: 20
        }
    }

    getXpm(xpm) {
        return parseXPM(xpm);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.xpm != this.props.xpm)
            this.setState({xpm: this.getXpm(this.props.xpm)});
    }

    getPixelSize(ppc) {
        return `${this.state.pixelScale * ppc}px`;
    }

    render() {
        return (
            <Wrapper pixelSize={this.getPixelSize(this.state.xpm.header.pixelsPerChar)}
                width={this.state.xpm.header.width} height={this.state.xpm.header.height}
                charColors={this.state.xpm.charColors} pixmap={this.state.xpm.pixmap}></Wrapper>
        );
    }
}

export default Xpm;
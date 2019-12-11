import React, { Component } from 'react';
import { parseXPM } from '../lib/xpm';

import Wrapper from './Wrapper';

class Xpm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xpm: this.getXpm(`! XPM2
16 7 2 1
* c #000000
. c #ffffff
**..*...........
*.*.*...........
**..*..**.**..**
*.*.*.*.*.*..*.*
**..*..**.*...**
...............*
.............**.`)
        }
    }

    getXpm(xpm) {
        return parseXPM(xpm);
    }

    render() {
        const pixelSize = '20px';

        return (
            <Wrapper pixelSize={pixelSize} width={this.state.xpm.header.width} height={this.state.xpm.header.height} 
                charColors={this.state.xpm.charColors} pixmap={this.state.xpm.pixmap}></Wrapper>
        );
    }
}

export default Xpm;
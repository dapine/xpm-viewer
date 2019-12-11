import React, { Component } from 'react';

class Pixel extends Component {
    render() {
        const pixelStyle = {
            backgroundColor: this.props.color,
        }

        return <div style={pixelStyle}></div>
    }
}

export default Pixel;
import React, { Component } from 'react';
import Pixel from './Pixel';

class Wrapper extends Component {
    getColorFromPixel(charColors, pixel) {
        let c = "";
        charColors.forEach((cc) => {
            if (cc.char === pixel) {
                c = cc.color;
            }
        })

        return c;
    }

    buildPixels(pixmap) {
        let pixels = [];

        pixmap.map(line => {
            line.map(col => {
                pixels.push(this.getColorFromPixel(this.props.charColors, col));
            });
        });

        return pixels;
    }

    render() {
        const pixels = this.buildPixels(this.props.pixmap);

        const wrapperStyle = {
            display: 'grid',
            gridGap: '0px',
            gridTemplateColumns: `repeat(${this.props.width}, ${this.props.pixelSize * this.props.charsPerPixel}px)`,
            gridTemplateRows: `repeat(${this.props.height}, ${this.props.pixelSize}px)`,
        }

        return (
            <div style={wrapperStyle}>
                {
                    pixels.map((color, i) => {
                        return <Pixel key={i} color={color}></Pixel>
                    })
                }
            </div>
        );
    }
}

export default Wrapper;

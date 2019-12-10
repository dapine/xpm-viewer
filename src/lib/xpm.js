const xpm2 = '! XPM2'

function parseVersion(version) {
    if (xpm2 !== version) {
        throw new Error(`Could not parse XPM version: expected: ${xpm2} got: ${version}`);
    }

    return xpm2;
}

function parseHeader(header) {
    const values = header.split();

    const parsedHeader = {
        'width': values[0],
        'height': values[1],
        'numColor': values[2],
        'pixelsPerChar': values[3],
    };

    Object.keys(parseHeader).forEach((k, v) => {
        if (v === undefined) {
            throw new Error(`Could not parse the header: ${k} is not set`);
        }
    });

    return parsedHeader;
}

function parseCharColor(charColor) {
    const charColorParsed = charColor.split(/\s+c\s+/);

    const cc = {
        'char': charColorParsed[0],
        // TODO: parse HEX color
        'color': charColorParsed[1],
    };

    Object.keys(cc).forEach((k, v) => {
        if (v === undefined) {
            throw new Error(`Could not parse character-color definition: ${k} is not set`);
        }
    });

    return cc;
}

function parseCharsColors(colors) {
    const colorsParsed = colors.split('\n');

    let charColors = [];

    colorsParsed.map((i) => {
        try {
            charColors.push(parseCharColor(i));
        } catch (error) {
            return error;
        }
    });
    
    return charColors;
}

function parsePixmap(pixmap) {
    const lines = pixmap.split('\n');

    const matrix = [];

    lines.map((l) => {
        let chars = l.split('');
        let cols = [];
        chars.map((c) => {
            cols.push(c);
        })
        matrix.push(cols);
    })

    return matrix;
}

module.exports.parseVersion = parseVersion;
module.exports.parseHeader = parseHeader;
module.exports.parseCharsColors = parseCharsColors;
module.exports.parsePixmap = parsePixmap;
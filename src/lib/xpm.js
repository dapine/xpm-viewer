const xpm2 = '! XPM2'

function parseVersion(version) {
    if (xpm2 !== version) {
        throw new Error(`Could not parse XPM version: expected: ${xpm2}, got: ${version}`);
    }

    return xpm2;
}

function parseHeader(header) {
    const values = header.split(' ');

    // XXX: This parsing could be better by not using `split` method. In such way, we can check for individual
    // value absence not depending on positions which can not output the correct error message.
    const parsedHeader = {
        'width': parseInt(values[0]) || undefined,
        'height': parseInt(values[1]) || undefined,
        'numColor': parseInt(values[2]) || undefined,
        'charsPerPixel': parseInt(values[3]) || undefined,
    };


    Object.keys(parsedHeader).forEach((k) => {
        if (parsedHeader[k] === undefined) {
            throw new Error(`Could not parse the header: ${k} is not set`);
        }
    });

    return parsedHeader;
}

function parseCharColor(charColor) {
    const charColorParsed = charColor.split(/\s+c\s+/);

    const cc = {
        'char': charColorParsed[0].trim() || ' ',
        // TODO: parse HEX color
        'color': charColorParsed[1].trim() === 'None' ? 'rgba(0,0,0,0)' : charColorParsed[1].trim(),
    };

    Object.keys(cc).forEach((k) => {
        if (cc[k] === undefined) {
            throw new Error(`Could not parse character-color definition: ${k} is not set`);
        }
    });

    return cc;
}

function parseCharsColors(colors) {
    // TODO: what about repeated characters?
    const colorsParsed = colors.split('\n');

    let charColors = [];

    colorsParsed.map((i) => {
        try {
            charColors.push(parseCharColor(i));
        } catch (error) {
            throw error;
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

function parseXPM(xpm) {
    const lines = xpm.split('\n');
    let version;
    let header;
    let charColors;
    let pixmap;

    try {
        version = parseVersion(lines[0]);
        header = parseHeader(lines[1]);

        // takes the char-color definition lines using 2 as offset (from version and header lines)
        const cc = lines.slice(2, header.numColor + 2);
        charColors = parseCharsColors(cc.join('\n'));

        // takes the rest of the file
        const pm = lines.slice(header.numColor + 2, lines.length);
        pixmap = parsePixmap(pm.join('\n'));
    } catch (error) {
        throw error;
    }

    return {
        'version': version,
        'header': header,
        'charColors': charColors,
        'pixmap': pixmap
    }
}

module.exports.parseXPM = parseXPM;

const characters = {
    A: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ],
    B: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
    ],
    C: [
        [0, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 1, 1, 1],
    ],
    D: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
    ],
    E: [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ],
    F: [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
    ],
    G: [
        [0, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 1, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
    ],
    H: [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ],
    I: [
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 0],
    ],
    J: [
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
    ],
    K: [
        [1, 0, 0, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
    ],
    L: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
    ],
    M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
    ],
    N: [
        [0, 0, 0, 0],
        [1, 0, 0, 1],
        [1, 1, 0, 1],
        [1, 0, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
    ],
    O: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
    ],
    P: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
    ],
    Q: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 1, 1],
        [0, 1, 1, 1],
    ],
    R: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
    ],
    S: [
        [0, 1, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
        [1, 1, 1, 0],
    ],
    T: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
    ],
    U: [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
    ],
    V: [
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [0, 1, 0, 0],
    ],
    W: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
    ],
    X: [
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [0, 1, 0, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
    ],
    Y: [[1, 0, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ]
    ,
    Z: [
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ],
    ' ': [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
    ]
};

// convert 2d array to string to display
function displayScreen(char, filled = ' # ', empty = '   ') {
    let grid = "";
    char.forEach(row => {
        let rowData = "";

        row.forEach((pixel) => {
            rowData += pixel === 1 ? filled : empty;
        });
        grid += rowData + "\n";
    });
    return grid;
}

// given text array get the max width needed to display on CRT screen
function getMaxWidth(text) {
    return text.map(txt => {
        let totalWidth = 0;
        for (let i = 0; i < txt.length; i++) {
            totalWidth += characters[txt.charAt(i).toUpperCase()][0].length + 1;
        }
        return totalWidth;
    }).reduce((max, item) => Math.max(Math.abs(max), Math.abs(item)));
}

// given text array get the max height needed to display on CRT screen
function getMaxHeight(text) {
    return text.length * 6 + text.length - 1;
}

// convert text array to 2d array of zeros and ones, 1: displays pixel, 0: hide a pixel
function buildScreen(text) {
    let screen = [];
    let maxWidth = getMaxWidth(text);

    for (let line = 0, editRow = 0; line < text.length; line++) {
        for (let j = 0; j < 6; j++, editRow++) {
            screen.push([]);
            let screenRow = screen[editRow];
            let pixelsWritten = 0;
            for (let i = 0; i < text[line].length; i++) {
                let chars = characters[text[line].charAt(i).toUpperCase()];
                chars[j].forEach(c => {
                    screenRow.push(c);
                    pixelsWritten++;
                });
                screenRow.push(0);
                pixelsWritten++;
            }
            for (let i = pixelsWritten; i < maxWidth; i++) {
                screenRow.push(0);
            }
        }
        screen.push([]);
        editRow++;
        for (let i = 0; i < maxWidth; i++) {
            screen[editRow - 1].push(0);
        }
    }
    return screen;
}

// takes 2d array and flatten it to 1d array
function flatten(screen) {
    let flatScreen = [];
    for (let row = 0; row < screen.length; row++) {
        for (let col = 0; col < screen[row].length; col++) {
            flatScreen.push(screen[row][col]);
        }
    }
    return flatScreen;
}

// takes 2d array of pixels and sprite size and returns instructions to run as array
function getInstructions(screen, window_size = 3) {
    // flatten the 2d array
    const flatScreen = flatten(screen);
    const width = screen[0].length;
    let window = 0;
    const instructions = [];
    for (let beam = 0; beam < flatScreen.length - 2; beam += 2) {
        let x = beam % width;
        const left = flatScreen[beam + 2];
        const right = flatScreen[beam + 3];
        if ((beam + 2) % width === 0 && beam !== 0) {
            if (left === 0 && right === 0) {
                window += add(-window + 2, instructions);
            } else if (left === 0 && right === 1) {
                window += add(-window + 1, instructions);
            } else if (left === 1 && right === 0) {
                window += add(-window - window_size + 1, instructions);
            } else if (left === 1 && right === 1) {
                window += add(-window - window_size + 2, instructions);
            }
            continue;
        }
        if (left === 0 && right === 0) {
            window += add(x - window + 4, instructions);
        } else if (left === 0 && right === 1) {
            window += add(x - window + 3, instructions);
        } else if (left === 1 && right === 0) {
            window += add(x - window - (window_size - 3), instructions);
        } else if (left === 1 && right === 1) {
            window += add(x - window - (window_size - 4), instructions);
        }

    }
    noop(instructions);
    noop(instructions);
    return instructions;
}

// noop instruction
function noop(instructions) {
    instructions.push("noop");
}

// add instruction
function add(x, instructions) {
    if (x === 0) {
        noop(instructions);
        noop(instructions);
    } else {
        instructions.push("addx " + x);
    }
    return x;
}

// to run when html input changes
function process() {
    // get textarea value and split into array
    const text = document.getElementById("outputText").value.split("\n");

    // get the sprite size
    const spriteSize = parseInt(document.getElementById("spriteSize").value);

    // get 2d screen
    let screen = buildScreen(text);

    // convert the 2d array to string to display it
    document.getElementById("printout").innerHTML = displayScreen(screen);

    // get instructions to display
    let instructions = getInstructions(screen, spriteSize);
    let instructionsText = "";
    instructions.forEach(inst => {
        instructionsText += inst + "\n";
    });
    document.getElementById("instructionsP").innerHTML = instructionsText;

    const maxWidth = getMaxWidth(text);
    const maxHeight = getMaxHeight(text);
    document.getElementById("details").innerText = `Height: ${maxHeight}, Width: ${maxWidth},# of Inst: ${instructions.length}, will run for ${flatten(screen).length} cycles`;
}
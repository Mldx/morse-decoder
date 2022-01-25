const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ':' '

};

function decode(expr) {
    let dec = {
        '00': '',
        '11': '-',
        '10': '.',
        '**': ' '
    }

    let temp = [];
    let temp2 = [];
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        temp = expr.slice(i, i + 10)
        for (let j = 0; j < temp.length; j += 2) {
            let mor = String(temp[j]) + String(temp[j + 1])
            temp2.push(dec[mor])
            if (mor === '**') {
                j += 8;
            }
        }
        result += MORSE_TABLE[temp2.join('')]
        temp2 = [];
    }
    return result
}

module.exports = {
    decode
}
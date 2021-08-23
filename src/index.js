const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = [];
    // let result = [];
    while (expr) {
      letters.push(expr.slice(0, 10))
      expr = expr.slice(10)
    }
    for (let letter of letters) {
      let morse = letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
      letters.splice(letters.indexOf(letter), 1, MORSE_TABLE[morse] || ' ')
      // result.push(MORSE_TABLE[morse] || ' ');
    }
    return letters.join('')
    // return result.join('')
}

module.exports = {
    decode
}
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
    BIN_ALPHABET = {}
    for (letter in MORSE_TABLE){
        bin_letter = [];
        for (s of letter.split('')){
            if (s === '.'){
                bin_letter.push('10');
            } else {
                bin_letter.push('11');
            }
        }
        key = bin_letter.join('').padStart(10, '0');
        BIN_ALPHABET[key] = MORSE_TABLE[letter];
    }
    
    phrase = [];
    for (i = 0; i < expr.length; i += 10){
        if (expr[i] == '*'){
            phrase.push(' ');
        } else {
            phrase.push(BIN_ALPHABET[expr.slice(i, i+10)]);
        }
    }
    return phrase.join('');
}




function decode2(expr) {
    phrase = [];
    for (i = 0; i < expr.length; i += 10){
        letter = expr.slice(i, i + 10).replaceAll('00','').replaceAll('10', '.').replaceAll('11','-');
        if (letter[0] == '*'){
            phrase.push(' ');
        } else {
            phrase.push(MORSE_TABLE[letter]);
        }
    }
    return phrase.join('');
}


module.exports = {
    decode
}
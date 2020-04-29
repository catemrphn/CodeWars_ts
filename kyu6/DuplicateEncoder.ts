/**
 * The goal of this exercise is to convert a string to a new string where each character
 * in the new string is "(" if that character appears only once in the original string, or ")"
 * if that character appears more than once in the original string. Ignore capitalization when
 * determining if a character is a duplicate.
 * Assertion messages may be unclear about what they display in some languages.
 * If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 **/


export function duplicateEncode(str: string) {
    let encode = str.toLowerCase();
    return encode.split('').map(letter => {
        let dup = 0;
        for (let i = 0; i < encode.length; i++) {
            letter === encode[i] ? dup++ : dup;
        }
        return dup <= 1 ? letter = '(' : letter = ')';
    }).join('');
}



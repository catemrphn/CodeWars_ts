/**
 * Define String.prototype.toAlternatingCase such that each lowercase letter becomes uppercase and each
 * uppercase letter becomes lowercase. As usual, your function/method should be pure,
 * i.e. it should not mutate the original string.
 **/

export function toAlternatingCase(s: string) {
    let string: any = s.split('').map(function (letter) {
        if (letter.toUpperCase() === letter) {
            return letter.toLowerCase();
        }
        else return letter.toUpperCase();
    }).join('');

    return string;
}

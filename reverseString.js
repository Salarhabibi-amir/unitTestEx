const reverseString = (string) => {
    let str = string.split('');
    str.reverse();
    let reverStr = str.join('');
    return reverStr;
}

module.exports = reverseString;
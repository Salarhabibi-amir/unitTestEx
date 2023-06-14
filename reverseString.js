const reverseString = (string) => {
    let str = string.split('');
    str.reverse();
    let reverStr = str.join('');
    return reverStr;
}
console.log(reverseString('hi'));
module.exports = reverseString;
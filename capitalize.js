const capitalize = (string) => {
    let str = string.charAt(0).toUpperCase() + string.slice(1)
    return str;
}
module.exports = capitalize;
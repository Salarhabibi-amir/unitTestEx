const stringLenght = (string) => {
    if (string.length > 10) {
        console.log('string is longer than 10 charachters')
    } else if (string.length < 1) {
        console.log('string must be at least one characher long');
    } else {
        return string.length;
    }
}

module.exports = stringLenght;
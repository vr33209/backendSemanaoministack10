module.exports = function parseStringAsArray(array) {
    return array.split(',').map(array => array.trim())
} 
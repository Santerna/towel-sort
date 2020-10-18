module.exports = function towelSort (matrix) {
    if ( !Array.isArray(matrix)  || (matrix.length === 0) ) {
        return ([]);
    }

    let sortedArray = [];

    matrix.forEach( function (subarray, index)  {
        if ( index % 2 == 0 ) {
            sortedArray = sortedArray.concat(subarray);
        } else {
            sortedArray = sortedArray.concat(subarray.reverse());
        }
    })
    
    return sortedArray;
}

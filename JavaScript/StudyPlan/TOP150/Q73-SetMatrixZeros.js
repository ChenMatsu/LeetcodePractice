/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const n = matrix.length;
    const rows = new Set();
    const cols = new Set();

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(!matrix[i][j]) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(rows.has[i] || cols.has[j]) matrix[i][j] = 0;
        }
    }
}

const setZeroes = (matrix) => {
    let isCol = false, r = matrix.length, c = matrix[0].length;

    for(let i = 0; i < r; i++) {
        if(!matrix[i][0]) isCol = true;
        for(let j = 1; j < c; j++) {
            if(!matrix[i][j]) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1; i < r; i++) {
        for(let j = 1; j < c; j++) {
            if(!matrix[i][0] || !matrix[0][j]) matrix[i][j] = 0;
        }
    }

    if(!matrix[0][0]) {
        for(let j = 0; j < c; j++) matrix[0][j] = 0;
    }

    if(isCol) {
        for(let i = 0; i < c; i++) matrix[i][0] = 0;
    }
}
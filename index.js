const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log('hello');

    const t1 = 1;
    console.log(t1);
    const t2 = 2;
    console.log(t2);
    if (!Array.isArray(matrix1) || !Array.isArray(matrix2)) {
        throw new Error("Input matrices must be arrays.");
    }
    const matrix1 = [
        [1, 2],
        [3, 4],
    ];
    const matrix2 = [
        [5, 6],
        [7, 8],
    ];
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;

    if (cols1 !== rows2) {
        throw new Error("Number of columns in the first matrix must be equal to the number of rows in the second matrix.");
    }

    const result = new Array(rows1);
    for (let i = 0; i < rows1; i++) {
        result[i] = new Array(cols2).fill(0);
    }

    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    console.log(result);
});

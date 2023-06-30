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
    console.log(result);
});

function astar(graph, startNode, endNode, heuristic) {
    const openSet = new Set([startNode]);
    const cameFrom = {};
    const gScore = {};
    const fScore = {};
    gScore[startNode] = 0;
    fScore[startNode] = heuristic(startNode, endNode);

    while (openSet.size > 0) {
        let lowestNode = null;
        let lowestFScore = Infinity;

        for (let node of nodes) {
            if (fScore[node] < lowestFScore) {
                lowestNode = node;
                lowestFScore = fScore[node];
            }
        }

        const current = lowestNode;

        if (current === endNode) {
            return reconstructPath(cameFrom, current);
        }

        openSet.delete(current);

        const neighbors = graph[current];
        for (let neighbor of neighbors) {
            const tentativeGScore = gScore[current] +
                Math.sqrt(Math.pow(current[0] - neighbor[0], 2) + Math.pow(current[1] - neighbor[1], 2));

            if (!gScore.hasOwnProperty(neighbor) || tentativeGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, endNode);

                if (!openSet.has(neighbor)) {
                    openSet.add(neighbor);
                }
            }
        }
    }

    return null;
}


function reconstructPath(cameFrom, current) {
    const path = [current];

    while (cameFrom.hasOwnProperty(current)) {
        current = cameFrom[current];
        path.unshift(current);
    }

    return path;
}

function getDistance(nodeA, nodeB) {
    // Calculate the distance between nodeA and nodeB
    // ...
}


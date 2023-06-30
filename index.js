const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log('hello');

    const t1 = 1;
    console.log(t1);
    const t2 = 2;
    console.log(t2);
});

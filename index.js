const express = require('express');
const app = express();
const console = require("node:console");
const port = 3002;
const finalapirouter = require("./routes/finalapi");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "ok"});
});

app.use("/finalapi", finalapirouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
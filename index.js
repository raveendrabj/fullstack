const express = require('express');
const port = 8000;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

//
app.post('/addemployee', (req, res) => {
    let empName = req.body.empName;
    let empPass = req.body.empPass;

    res.send(`POST success, you sent ${empName} and ${empPass}, thanks!`);
});
//
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
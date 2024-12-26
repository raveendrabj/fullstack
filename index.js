const express = require('express');
const port = 8000;
const app = express();
const router = express.Router();
const routes = require('./routes/routes')
//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(router);
//

//
app.use('/', router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
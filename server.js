const req = require('express/lib/request');
const res = require('express/lib/response');

const express = require('express');
const app = express();

const port = 4600;

//middlewares
app.use(express.json());

//routers
const routers = require('./routes/mutualFundsRouter');
app.use('/mutual-funds', routers);
const routers = require('./routes/accountsRouter.js');
app.use('/accounts', routers);
const routers = require('./routes/mFStocksRouter');
app.use('/mutual-funds-stocks', routers);

app.get('/', (req, res) => {
    res.send('Hello')
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
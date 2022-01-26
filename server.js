const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 4600;

//middlewares
app.use(express.json());
app.use(cors());

//routers
const mFRouters = require('./routes/mutualFundsRouter');
app.use('/mutual-funds', mFRouters);
const accountRouters = require('./routes/accountsRouter');
app.use('/accounts', accountRouters);
const stockRouters = require('./routes/mFStocksRouter');
app.use('/mutual-funds-stocks', stockRouters);

app.get('/', (req, res) => {
    res.send('Mutual Fund Service is up and running!')
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
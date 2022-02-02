require('dotenv').config();

//During the test the end variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Mutual Funds', () => {

    //Make sure to have a test database and likely would want to have
    //a before each to empty it out after testing

    //Testing the /GET route
    describe('/GET mutual funds', () => {
        it('it should GET all the mutual funds', (done) => {
            chai.request(server).get('/mutual-funds').end((err, res) => {
                res.should.have.status(200);
                // console.log(res.body);
                res.body.should.be.a('array');
                Object.keys(res.body).length.should.be.eql(25);
                done();
            })
        });
    });

    describe('/GET/:mf_id mutual fund', () => {
        it('it should GET the mutual fund with the given id', (done) => {
            chai.request(server).get('/mutual-funds/4').end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('mf_id');
                res.body.should.have.property('fundName');
                res.body.should.have.property('symbol');
                res.body.should.have.property('yTD');
                res.body.should.have.property('inceptionDate');
                res.body.should.have.property('inceptionRate');
                res.body.should.have.property('expenseRatio');
                res.body.should.have.property('nAV');
                res.body.should.have.property('risk');
                res.body.should.have.property('minimum');
                done();
            })
        });

        // it('it should GET 404 error if course not found', (done) => {
        //     chai.request(server).get('/mutual-funds/36').end((err, res) => {
        //         res.should.have.status(404);
        //     done();
        //     })
        // });
    });
});

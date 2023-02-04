const supertest = require('supertest');
const app = require('../server/app');
const mongoose = require("mongoose");
const { expect } = require('chai');
//const { expect } = require('chai');
mongoose.set('strictQuery', false);

beforeEach((done) => {
  mongoose.connect("mongodb+srv://bose-biswanath:QazWsx%403148@cluster0.nzfc7hr.mongodb.net/unittestproduct?retryWrites=true&w=majority",
    { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});

describe('#Product list API', () => {
  test('GET /product/viewproducts  -- > should respond with a 200 status code', async () =>{
    await supertest(app).get("/product/viewproducts")
    .expect(200)
    .expect('Content-Type', /json/)
    .then((response) => {
      expect(response.body).to.equal(
        expect.objectContaining({
          categories
        })
      );
        
    });


  });


});

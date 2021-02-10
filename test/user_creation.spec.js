const expect = require("chai").expect,
{ random, name } = require("faker"),
{ userCreation } = require("../userCreation.js"),
chai = require('chai'),
chaiHttp = require('chai-http'),
server = 'http://localhost:3000';

chai.use(chaiHttp);

let newUser, userName, userAge, userHeight;
beforeEach(() => {
  userName = name.firstName();
  userAge = random.number();
  userHeight = `${random.number()}ft`;
  newUser = userCreation(userName, userAge, userHeight);
});

describe("creating a new newUser", () => {

  context("without arguments", () => {
    it("should log please include name, age, height", () => {
      expect(userCreation()).to.equal(false);
    });
  });

  context("with arguments", () => {

    it("newUser's age should be an integer", () => {
      expect(typeof newUser.age).to.equal("number");
    });

    it("newUser's name should be a string", () => {
      expect(typeof newUser.name).to.equal("string");
    });

    it("newUser's height should be a string", () => {
      expect(typeof newUser.height).to.equal("string");
    });

    it("newUser should be an object", () => {
      expect(typeof newUser).to.equal("object");
    });
  });
});

describe("when inserting a new newUser", () => {
  
  it("201 status code should be received", () => {
     chai.request(server)
    .post('/api/')
     .send({
       'name': userName,
       'height': userHeight,
       'age': userAge
     })
     .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
     });
  });

  it("preDatabaseInserted user properties equals postDatabaseInserted user properties", (done) => {
    chai.request(server)
    .post('/api/')
    .send({
      'name': userName,
      'height': userHeight,
      'age': userAge
    })
    .end((err, { body: { age, height, name } }) => {
       expect(err).to.be.null;
       expect(age).to.equal(newUser.age);
       expect(height).to.equal(newUser.height);
       expect(name).to.equal(newUser.name);
       done();
      });  
  });
  
  let falseNewUser, falseUserName, falseUserAge, falseUserHeight;
  before(() => {
    falseUserName = random.number();
    falseUserAge = name.firstName();
    falseUserHeight = random.number();
    falseNewUser = userCreation(userName, userAge, userHeight);
  });

  describe("a user is created with the wrong data type", () => {
    
    it("400 status code should be received", (done) => {
      chai.request(server)
      .post('/api/')
      .send({
        'name': falseUserName,
        'height': falseUserHeight,
        'age': falseUserAge
      })
      .end((_, res) => {
         expect(res).to.have.status(400);
         done();
        });  
    });
    
    it("'You have entered the wrong data type' should be received", (done) => {
      chai.request(server)
      .post('/api/')
      .send({
        'name': falseUserName,
        'height': falseUserHeight,
        'age': falseUserAge
      })
      .end((_, res) => {
        expect(res.error.text).to.be.equal("You have entered the wrong data type");
        done();
      });  
    });
  });

});

// CRUD - CREATE, READ
// TODO READ
// when creating a new user
  // then the same user should be accessible (GET)
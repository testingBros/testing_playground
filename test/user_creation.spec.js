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
      expect(userCreation()).to.equal("please include name, age, height.");
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
     .post(`/api/?name=${userName}&height=${userHeight}&age=${userAge}`)
     .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
     });
  });

  it("preDatabaseInserted user properties equals postDatabaseInserted user properties", (done) => {
    chai.request(server)
    .post(`/api/?name=${userName}&height=${userHeight}&age=${userAge}`)
    .end((err, { body: { age, height, name } }) => {
       expect(err).to.be.null;
       expect(age).to.equal(newUser.age);
       expect(height).to.equal(newUser.height);
       expect(name).to.equal(newUser.name);
       done();
      });  
  });
});

// CRUD - CREATE, READ
// TODO
// when a user is created with the wrong data type
  // then error returned
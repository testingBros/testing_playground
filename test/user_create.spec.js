const { mockPostRequest } = require("./test_api_requests.spec.js");
const { userCreation } = require("../db/dbHelpers/utils");
const expect = require("chai").expect;
const { random, name } = require("faker");

let newUser, userName, userAge, userHeight;
beforeEach( async () => {
  userName = name.firstName();
  userAge = random.number();
  userHeight = `${random.number()}ft`;
  newUser = await userCreation(userName, userAge, userHeight);
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
  
  it("201 status code should be received", async () => {
    const { res: { statusCode } } = await mockPostRequest({ userName, userHeight, userAge })
    expect(statusCode).to.equal(201);
  });

  it("preDatabaseInserted user properties equals postDatabaseInserted user properties", async () => {
    const { body: { name, height, age }} = await mockPostRequest({ userName, userHeight, userAge });
    expect(userName).to.be.equal(name);
    expect(userHeight).to.be.equal(height);
    expect(userAge).to.be.equal(age);
  });
  
  let falseNewUser, falseUserName, falseUserAge, falseUserHeight;
  before(() => {
    falseUserName = random.number();
    falseUserAge = name.firstName();
    falseUserHeight = random.number();
    falseNewUser = userCreation(userName, userAge, userHeight);
  });

  describe("a user is created with the wrong data type", () => {
    
    it("400 status code should be received", async () => {
      const { res: { statusCode }} = await mockPostRequest({ falseUserName, falseUserHeight, falseUserAge });
      expect(statusCode).to.be.equal(400);
    });
    
    it("'You have entered the wrong data type' should be received", async () => {
      const { res } = await mockPostRequest({ falseUserName, falseUserHeight, falseUserAge });
      expect(res.text).to.be.equal("You have entered the wrong data type");  
    });

  });
});


// CRUD - CREATE, READ
// TODO READ
// when creating a new user
  // then the same user should be accessible (GET)
// look into making requests modular
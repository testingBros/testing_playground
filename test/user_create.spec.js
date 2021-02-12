const { mockPostRequest } = require("./test_api_requests.spec.js");
const expect = require("chai").expect;
const { random, name } = require("faker");

let newUser, userName, userAge, userHeight, mockHttpResponse;

before(async () => {
  userName = name.firstName();
  userAge = random.number();
  userHeight = `${random.number()}ft`;
  newUser = await mockPostRequest({ userName, userHeight, userAge });
  mockHttpResponse = newUser.res;
  newUser = newUser.body;
});

describe("creating a new newUser", () => {
  context("without arguments", () => {
    it("should log please include name, age, height", async () => {
      const {
        error: { text: errorMessage },
      } = await mockPostRequest();
      expect(errorMessage).to.equal("You have entered the wrong data type");
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
  it("201 status code should be received", () =>
    expect(mockHttpResponse.statusCode).to.equal(201));

  it("preDatabaseInserted user properties equals postDatabaseInserted user properties", () => {
    expect(userName).to.be.equal(newUser.name);
    expect(userHeight).to.be.equal(newUser.height);
    expect(userAge).to.be.equal(newUser.age);
  });

  let falseNewUser,
    falseUserName,
    falseUserAge,
    falseUserHeight,
    falseMockHttpResponse;

  before(async () => {
    falseUserName = random.number();
    falseUserAge = name.firstName();
    falseUserHeight = random.number();
    falseNewUser = await mockPostRequest(
      falseUserName,
      falseUserAge,
      falseUserHeight
    );
    falseMockHttpResponse = falseNewUser.res;
  });

  describe("a user is created with the wrong data type", () => {
    it("400 status code should be received", () =>
      expect(falseMockHttpResponse.statusCode).to.be.equal(400));

    it("'You have entered the wrong data type' should be received", () =>
      expect(falseMockHttpResponse.text).to.be.equal(
        "You have entered the wrong data type"
      ));
  });
});

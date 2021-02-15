const { mockPostRequest } = require("./test_api_requests.spec.js");
const expect = require("chai").expect;
const { random, name } = require("faker");

describe("creating a new user", () => {
  let newUser, userName, userAge, userHeight, mockHttpResponse;

  before(async () => {
    userName = name.firstName();
    userAge = random.number();
    userHeight = `${random.number()}ft`;
    
    newUser = await mockPostRequest({ userName, userHeight, userAge });
    mockHttpResponse = newUser.res;
    newUser = newUser.body;
  });
  context("without arguments", () => {
    it("should log please include name, age, height", async () => {
      const {
        error: { text: errorMessage },
      } = await mockPostRequest();
      expect(errorMessage).to.equal("You have entered the wrong data type");
    });
  });

  context("with arguments", () => {
    it("new user's age should be an integer", () => {
      expect(typeof newUser.age).to.equal("number");
    });

    it("new user's name should be a string", () => {
      expect(typeof newUser.username).to.equal("string");
    });

    it("new user's height should be a string", () => {
      expect(typeof newUser.height).to.equal("string");
    });

    it("new user should be an object", () => {
      expect(typeof newUser).to.equal("object");
    });
  });

  context("when inserting the new user", () => {
    it("201 status code should be received", () =>
      expect(mockHttpResponse.statusCode).to.equal(201));

    it("should validate that the new user's property values have not changed", () => {
      expect(userName).to.be.equal(newUser.username);
      expect(userHeight).to.be.equal(newUser.height);
      expect(userAge).to.be.equal(newUser.age);
    });

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

  context("when a new user is created with the wrong data type", () => {
    it("400 status code should be received", () =>
      expect(falseMockHttpResponse.statusCode).to.be.equal(400));

    it("'You have entered the wrong data type' should be received", () =>
      expect(falseMockHttpResponse.text).to.be.equal(
        "You have entered the wrong data type"
      ));
  });
});

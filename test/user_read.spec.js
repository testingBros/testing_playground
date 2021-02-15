// finish tests for user_read_spec.js (include things such as error handling, headers, cookies, ...)
// discuss best practices for handling ids server/client-side
const expect = require("chai").expect,
  { mockPostRequest, mockGetRequest } = require("./test_api_requests.spec.js"),
  { random, name } = require("faker");

const userId = random.number() * 1000;
describe("when retrieving a user", () => {
  let newUser, userName, userAge, userHeight, mockGetHttpResponse;

  before(async () => {
    userName = name.firstName();
    userAge = random.number();
    userHeight = `${random.number()}ft`;
    newUser = await mockPostRequest({ userName, userHeight, userAge });
    newUser = newUser.body;
    mockGetHttpResponse = await mockGetRequest(newUser.id);
    currentUser = mockGetHttpResponse.body;
  });

  it("a 200 status code should be retrieved", () => {
    expect(mockGetHttpResponse.statusCode).to.be.equal(200);
  });

  it("should validate that the user's property values have not changed", () => {
    expect(currentUser.username).to.be.equal(newUser.username);
    expect(currentUser.age).to.be.equal(newUser.age);
    expect(currentUser.height).to.be.equal(newUser.height);
    expect(currentUser.id).to.be.equal(newUser.id);
  });

  let falseMockGetHttpResponse;

  before(async () => {
    falseMockGetHttpResponse = await mockGetRequest(userId);
  });

  context("that is not in the database", () => {
    it("should receive a 404 status code", () => {
      expect(falseMockGetHttpResponse.statusCode).to.be.equal(404);
    });

    it('should receive the error message "This user does not exist."', () => {
      expect(falseMockGetHttpResponse.text).to.be.equal(
        "This user does not exist."
      );
    });
  });
});

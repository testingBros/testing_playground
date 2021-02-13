// add testing for updating various numbers of properties.
// error handling for unsuccessful patch requests.
// maybe try put requests? maybe who knows?
// make delete route

const expect = require("chai").expect,
  { random, name } = require("faker"),
  { mockPostRequest, mockPatchRequest } = require("./test_api_requests.spec");

describe("updating a user in the database", () => {
  let newUser, userName, userAge, userHeight;
  before(async () => {
    userName = name.firstName();
    userAge = random.number();
    userHeight = `${random.number()}ft`;
    newUser = await mockPostRequest({ userHeight, userAge, userName });
    newUser = newUser.body;
  });

  context("when updating a user's name", () => {
    it("the original user's name should be different than updated user name", async () => {
      const {
        body: { username: updatedUserName },
      } = await mockPatchRequest(newUser.id, { username: name.firstName() });
      expect(updatedUserName).to.not.be.equal(newUser.username);
    });
  });
});

const expect = require("chai").expect,
  { mockPostRequest, mockGetRequest } = require("./test_api_requests.spec.js"),
  { random, name } = require("faker");

describe("when retrieving a user", () => {
  let newUser, userName, userAge, userHeight;
  before(async () => {
    userName = name.firstName();
    userAge = random.number();
    userHeight = `${random.number()}ft`;
    newUser = await mockPostRequest({ userName, userHeight, userAge });
    newUser = newUser.body;
  });

  it("a 200 status code should be retrieved", async () => {
    const user = await mockGetRequest(newUser.id);
    expect(user.statusCode).to.be.equal(200);
  });

  it("the retrieved values should equal posted values", async () => {
    const {
      body: { userName, age, height, id },
    } = await mockGetRequest(newUser.id);
    // expect(name).to.be.equal(newUser.name);
    expect(age).to.be.equal(newUser.age);
    expect(height).to.be.equal(newUser.height);
    expect(id).to.be.equal(newUser.id);
  });
});

// finish tests for user_read_spec.js (include things such as error handling, headers, cookies, ...)
// discuss best practices for handling ids server/client-side

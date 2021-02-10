const expect = require("chai").expect,
{ mockPostRequest, mockGetRequest } = require("./test_api_requests.spec.js"),
{ random, name } = require("faker");

describe("when retrieving a user", () => {
  let newUser, userName, userAge, userHeight;
  beforeEach(async () => {
    userName = name.firstName();
    userAge = random.number();
    userHeight = `${random.number()}ft`;
    newUser = await mockPostRequest({ userName, userHeight, userAge });  
  });
  
  it("a 200 status code should be retrieved", () => {
        
  });

});


// when creating a new user
  // then the same user should be accessible (GET)


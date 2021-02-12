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
// finish making user retrieval function inside of userRetrieval.js
// finish tests for user_read_spec.js (include things such as error handling, headers, cookies, ...)
// discuss best practices for handling ids server/client-side


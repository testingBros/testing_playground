const expect = require("chai").expect,
  { random, name } = require("faker"),
  { mockPostRequest, mockDeleteRequest, mockGetRequest } = require("./test_api_requests.spec");
  
  describe("when deleting a user that is in the database", () => {
    let newUser;
    before(async() => {    
      newUser = await mockPostRequest({ 
        username: name.firstName(), 
        height: `${random.number()}ft`, 
        age: random.number()
      });

      newUser = newUser.body;
      
    });

    it("a 204 status code should be received", async () => {
      const response = await mockDeleteRequest(newUser.id);
      expect(response.status).to.be.equal(204);
    });
    
    
  });

  describe("when deleting a user that is not in the database", () => {
    let newUser, newUserId, mockGetResponse;
    before(async() => {    
      newUser = await mockPostRequest({ 
        username: name.firstName(), 
        height: `${random.number()}ft`, 
        age: random.number()
      });

      newUser = newUser.body;
      newUserId = newUser.id;    
      await mockDeleteRequest(newUserId);
      mockGetResponse = { error: { status, text: errorMessage } } = await mockGetRequest(newUserId);

    });
    
    it ("a 404 status code should be received", () => {
      expect(status).to.be.equal(404);
    });

    it ("an error message of 'This user does not exist.' should be received", () => {
      expect(errorMessage).to.be.equal('This user does not exist.');
    });
  });
  // add error handling for deleting a user not in the db
  // think about making the sending of res.status codes modular
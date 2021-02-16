const expect = require("chai").expect,
  { random, name } = require("faker"),
  { mockPostRequest, mockDeleteRequest } = require("./test_api_requests.spec");
  
  describe("when deleting a user from the database", () => {
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

  // add error handling for deleting a user not in the db
  // think about making the sending of res.status codes modular
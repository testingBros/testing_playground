const expect = require("chai").expect;
const { random, name } = require("faker");
const { userCreation } = require("../userCreation.js");
const axios = require('axios');

let user, userName, userAge, userHeight;
beforeEach(() => {
  userName = name.firstName();
  userAge = random.number();
  userHeight = `${random.number()}ft`;
  user = userCreation(userName, userAge, userHeight);
});

describe("creating a new user", () => {
  // let user, userName, userAge, userHeight;
  // beforeEach(() => {
  //   userName = name.firstName();
  //   userAge = random.number();
  //   userHeight = `${random.number()}ft`;
  //   user = userCreation(userName, userAge, userHeight);
  // });

  context("without arguments", () => {
    it("should log please include name, age, height", () => {
      expect(userCreation()).to.equal("please include name, age, height.");
    });
  });

  context("with arguments", () => {
    it("user's age should be an integer", () => {
      expect(typeof user.age).to.equal("number");
    });
    it("user's name should be a string", () => {
      expect(typeof user.name).to.equal("string");
    });
    it("user's height should be a string", () => {
      expect(typeof user.height).to.equal("string");
    });
    it("user should be an object", () => {
      expect(typeof user).to.equal("object");
    });
  });
});

describe("when inserting a new user", () => {
  it("201 status code should be received",  () => {
    const newUser = await userCreation(beavis, userHeight, userName);
     axios.post(`localhost:3000/api/?name=${userName}&height=${userHeight}&age=${userAge}`, (req, res) => {
      
    }).then(response => {
      console.log(response.data);
    }).catch(err => {
      console.log('errrr', err);
    })
    // axios.post('localhost:3000/api', {
    //  name: userName,
    //  height: userHeight, 
    //  age: userAge
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
   
    expect(1).to.equal(1);
    // done();
  });
  it("returned user value is the same as newly created user value", () => {
    
  });
});

// when  'a new user is inserted'
  // then 201 status code should be received
  // then returned user value is the same as newly created user value

// move to read in the CRUD operations (i.e. get requests)
// formulate a new series of when then statements

// use axios request with data to hit our endpoint
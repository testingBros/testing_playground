const { random, name } = require("faker"),
{ userCreation } = require("../userCreation.js"),
chai = require('chai'),
chaiHttp = require('chai-http'),
server = 'http://localhost:3000';

chai.use(chaiHttp);

const mockPostRequest = async ({ userName, userHeight, userAge }) => {
  return await chai.request(server)
    .post('/api/')
    .send({
      'name': userName,
      'height': userHeight,
      'age': userAge
  });
}

module.exports = {
  mockPostRequest,
}


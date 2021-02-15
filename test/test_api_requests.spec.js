const chai = require("chai"),
  chaiHttp = require("chai-http"),
  server = "http://localhost:3000";

chai.use(chaiHttp);

const mockPostRequest = async ({ userName, userHeight, userAge } = {}) => {
  return await chai.request(server).post("/api/").send({
    username: userName,
    height: userHeight,
    age: userAge,
  });
};

const mockGetRequest = async (currentUserId) =>
  await chai.request(server).get(`/api/${currentUserId}`);

const mockPatchRequest = async (id, propertiesObject) =>
  await chai.request(server).patch(`/api/${id}`).send(propertiesObject);

module.exports = {
  mockPostRequest,
  mockGetRequest,
  mockPatchRequest,
};

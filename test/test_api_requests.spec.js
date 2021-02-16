const chai = require("chai"),
  chaiHttp = require("chai-http"),
  server = "http://localhost:3000";

chai.use(chaiHttp);

const mockPostRequest = async ({ username, height, age } = {}) => {
  return await chai.request(server).post("/api/").send({
    username, height, age
  });
};

const mockGetRequest = async (currentUserId) =>
  await chai.request(server).get(`/api/${currentUserId}`);

const mockPatchRequest = async (id, propertiesObject) =>
  await chai.request(server).patch(`/api/${id}`).send(propertiesObject);

const mockDeleteRequest = async (id) =>
  await chai.request(server).delete(`/api/${id}`);  

module.exports = {
  mockPostRequest,
  mockGetRequest,
  mockPatchRequest,
  mockDeleteRequest,
};

const errorHandlerBuilder = async (statusCode, error, response) => {
  if (error) await response.status(statusCode).send(error);
} 

const errorMessageBuilder = (errorMessage, user) => {
  if (!user) throw `${errorMessage}`;
}

module.exports = {
  errorHandlerBuilder,
  errorMessageBuilder
}
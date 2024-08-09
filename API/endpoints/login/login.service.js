const HttpStatusCode = require("../../common/statuscode");
const jwt = require("jsonwebtoken");
module.exports = {
  login: login,
};
async function login(params) {
  if (!params.emailId || !params.password) {
    return {
      message: HttpStatusCode.BadRequest.Message,
      status: HttpStatusCode.BadRequest.Code,
    };
  }
  console.log(params);
  if (
    params.emailId == "avnish@mailinator.com" &&
    params.password == "Avnish@123"
  ) {
    const user = {
      emailId: "avnish@mailinator.com",
      userId: "1",
      username: "Avnish Maurya",
    };
    return {
      token: await generateToken(user),
      user: user,
      status: HttpStatusCode.Success.Code,
    };
  } else {
    return {
      token: null,
      user: null,
      status: HttpStatusCode.BadRequest.Code,
    };
  }
}

async function generateToken(user) {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: user.Id,
    EmailId: user.EmailId,
  };
  return jwt.sign(data, jwtSecretKey);
}

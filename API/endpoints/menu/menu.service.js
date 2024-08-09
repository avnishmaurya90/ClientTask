const HttpStatusCode = require("../../common/statuscode");

module.exports = {
  getAll: getAll,
};

async function getAll() {
  const rows = [
    { id: "1", MenuName: "Menus",SubMenu:[], Route: "/menu",MenuIcon:"menu" },
    { id: "2", MenuName: "Chat via Socket.io",SubMenu:[], Route: "/chat",MenuIcon:"message" },
  ];
  if (!rows || !rows.length) {
    return {
      message: HttpStatusCode.NotFound.Message,
      status: HttpStatusCode.NotFound.Code,
    };
  }
  return {
    data: rows,
    status: HttpStatusCode.Success.Code,
  };
}

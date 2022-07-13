const auth = require("json-server-auth");
const moment = require("moment");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./database/db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4000;
server.db = router.db;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = moment().valueOf();
    req.body.updatedAt = moment().valueOf();
  }
  if (req.method === "PUT") {
    req.method = "PATCH";
  }

  if (req.method === "PATCH") {
    req.body.updatedAt = moment().valueOf();
  }

  next();
});

server.use(auth);
server.use(router);
server.listen(PORT);

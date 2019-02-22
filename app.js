const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-session");

const index = require("./routes/index");
const users = require("./routes/users");
const login = require("./routes/login");
const register = require("./routes/register");
const shopmanger = require("./routes/shopmanger");
const api = require("./routes/api");
const account = require("./routes/account");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

{
  app.keys = ["koa2 daha"];
  const CONFIG = {
    key: "koa:sess",
    maxAge: 86400000,
    autoCommit: true,
    overwrite: true,
    httpOnly: false,
    signed: true,
    rolling: true,
    renew: false
  };

  app.use(session(CONFIG, app));
}

{
  app.use(
    views(__dirname + "/views", {
      extension: "ejs"
    })
  );
}

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(login.routes(), login.allowedMethods());
app.use(register.routes(), register.allowedMethods());
app.use(shopmanger.routes(), shopmanger.allowedMethods());
app.use(api.routes(), api.allowedMethods());
app.use(account.routes(), account.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;

const router = require("koa-router")();
const User = require("../models/users");
const crypto = require("crypto");

router.get("/login", async (ctx, next) => {
  await ctx.render("login");
});

router.post("/login", async ctx => {
  let loginReq = ctx.request.body;
  //crypto - 用于加密密码
  let md5 = crypto.createHash("md5");
  loginReq.password = md5.update(loginReq.password).digest("hex");
  let user = await User.findOne(loginReq);
  if (!user) {
    ctx.body = {
      code: 0,
      message: "密码或用户信息有误"
    };
  } else {
    //保存session状态，得到用户信息
    ctx.session.user = user;
    ctx.body = {
      code: 1,
      message: "登录成功"
    };
  }
});

router.get("/loginout", async ctx => {
  ctx.session.user = null;
  ctx.redirect("/login");
});

module.exports = router;

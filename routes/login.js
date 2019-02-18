const router = require("koa-router")();
const User = require("../models/users");

router.get("/login", async (ctx, next) => {
  await ctx.render("login");
});

router.post("/login", async ctx => {
  let loginReq = ctx.request.body;
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

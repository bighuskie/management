const router = require("koa-router")();
const userDB = require("../models/users");

router.prefix("/account");

router.get("/", async (ctx, next) => {
  let userId = ctx.session.user._id;
  let userInfo = await userDB.findById(userId);
  await ctx.render("./account/profile", {
    title: "账号信息",
    user: ctx.session.user,
    userInfo
  });
});

router.get("/setting", async (ctx, next) => {
  ctx.body = "this is a users/bar response";
});

module.exports = router;

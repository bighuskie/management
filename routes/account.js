const router = require("koa-router")();
const userDB = require("../models/users");

router.prefix("/account");

router.get("/", async (ctx, next) => {
  console.log(ctx.session.user)
  let userInfo = await userDB.findById(ctx.session.user.id);
  // console.log(userInfo)
  await ctx.render("./account/profile", {
    title: "账号信息",
    user: ctx.session.user
    // userInfo
  });
});

router.get("/setting", async (ctx, next) => {
  ctx.body = "this is a users/bar response";
});

module.exports = router;

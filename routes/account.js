const router = require("koa-router")();
const userDB = require("../models/users");

router.prefix("/account");
/**
 * 请求渲染个人中心页
 */
router.get("/", async (ctx, next) => {
  let userId = ctx.session.user._id;
  let userInfo = await userDB.findById(userId);
  await ctx.render("./account/profile", {
    title: "账号信息",
    user: ctx.session.user,
    userInfo
  });
});

/**
 * 账号设置逻辑处理
 */
router.get("/settings", async (ctx, next) => {
  let userId = ctx.session.user._id;
  let userInfo = await userDB.findById(userId);
  await ctx.render("./account/settings", {
    title: "账号设置",
    user: ctx.session.user,
    userInfo
  });
});

router.post("/settings", async (ctx, next) => {
  let formReq = ctx.request.body;
  let userId = ctx.session.user._id;
  await userDB.findByIdAndUpdate(userId, formReq).then(user => {
    ctx.status = 204;
  });
});

module.exports = router;

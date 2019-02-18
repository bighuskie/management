const router = require("koa-router")();
const User = require("../models/users");

router.get("/register", async (ctx, next) => {
  await ctx.render("register");
});

router.post(
  "/register",
  async (ctx, next) => {
    let req = ctx.request.body;
    if (await User.findOne({ username: req.username })) {
      ctx.body = {
        code: -1,
        message: "用户名已存在"
      };
    } else {
      if (await User.findOne({ email: req.email })) {
        ctx.body = { code: 0, message: "邮箱已存在" };
      } else {
        await new User(req).save().then(async () => {
          //保存session状态，得到用户信息
          ctx.session.user = await User.findOne(req);
          ctx.body = { code: 1, message: "注册成功" };
        });
      }
    }
  },
  err => {
    ctx.body = { code: 500, message: "服务错误" };
  }
);

module.exports = router;

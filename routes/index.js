const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "首页",
    user: ctx.session.user
  });
});

module.exports = router;

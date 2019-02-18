const router = require("koa-router")();

router.prefix("/shopmanger");

router.get("/", async (ctx, next) => {
  await ctx.render("./shopmanger/index", {
    title: "商品管理",
    user: ctx.session.user
  });
});

router.get("/detail", async (ctx, next) => {
  await ctx.render("./shopmanger/detail", {
    title: "商品详情",
    user: ctx.session.user
  });
});

router.get("/addshop", async (ctx, next) => {
  await ctx.render("./shopmanger/addshop", {
    title: "增加商品",
    user: ctx.session.user
  });
  console.log(ctx.request.body);
});

module.exports = router;

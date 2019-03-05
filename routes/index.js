const router = require("koa-router")();
const shopDB = require("../models/shops");
const userDB = require("../models/users");

router.get("/", async (ctx, next) => {
  let shopCount = await shopDB.count();
  let users = await userDB.find().limit(4);
  await ctx.render("index", {
    title: "首页",
    user: ctx.session.user,
    shopCount,
    users
  });
});

module.exports = router;

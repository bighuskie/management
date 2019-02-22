const router = require("koa-router")();
const shopDB = require("../models/shops");
const userDB = require("../models/users");
router.prefix("/api");

/**
 * 请求商品列表的Api
 */
router.get("/shoplist", async (ctx, next) => {
  let shoplist = await shopDB.find();
  ctx.body = shoplist;
});

/**
 * 请求用户列表的Api
 */
router.get("/userlist", async (ctx, next) => {
  let userlist = await userDB.find();
  ctx.body = userlist;
});

module.exports = router;

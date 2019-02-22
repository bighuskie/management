const router = require("koa-router")();
const shopDB = require("../models/shops");
const userDB = require("../models/users");
router.prefix("/api");

router.get("/shoplist", async (ctx, next) => {
  let shoplist = await shopDB.find();
  ctx.body = shoplist;
});

router.get("/userlist", async (ctx, next) => {
  let userlist = await userDB.find();
  ctx.body = userlist;
});

module.exports = router;

const router = require("koa-router")();
const shopDB = require("../models/shops");
router.prefix("/api");

router.get("/shoplist", async (ctx, next) => {
  let shoplist = await shopDB.find();
  ctx.body = shoplist;
});

router.get("/userlist", async (ctx, next) => {
  ctx.body = "this is a users/bar response";
});

module.exports = router;

const router = require("koa-router")();
const shopDB = require("../models/shops");

router.prefix("/shopmanger");
/**
 * 商品管理页逻辑处理
 */
router.get("/", async (ctx, next) => {
  let currentPage = Number(ctx.request.query.page) || 1;
  const limit = 12;
  let dataCount = await shopDB.count();
  //总页数
  let pages = Math.ceil(dataCount / limit);
  //当前页不可以超过总页数
  currentPage = Math.min(currentPage, pages);
  //当前页不可以小于1
  currentPage = Math.max(currentPage, 1);
  let skip = (currentPage - 1) * limit;
  let shops = await shopDB
    .find()
    .limit(limit)
    .skip(skip);
  await ctx.render("./shopmanger/index", {
    title: "商品管理",
    user: ctx.session.user,
    shops,
    currentPage
  });
});

/**
 * 商品详情页逻辑处理
 * 渲染详情信息页
 */
router.get("/detail", async (ctx, next) => {
  let shopId = ctx.request.query.id;
  let shop = await shopDB.findById(shopId);
  await ctx.render("./shopmanger/detail", {
    title: "商品详情",
    user: ctx.session.user,
    shop
  });
});

/**
 * 增加商品页逻辑处理
 */
// 1、渲染增加商品页
router.get("/addshop", async (ctx, next) => {
  await ctx.render("./shopmanger/addshop", {
    title: "增加商品",
    user: ctx.session.user
  });
});
//2、保存商品信息
router.post("/addshop", async (ctx, next) => {
  let formReq = ctx.request.body;
  await new shopDB(formReq)
    .save()
    .then(() => {
      ctx.status = 200;
      ctx.body = {
        code: 1,
        msg: "保存成功"
      };
    })
    .catch(err => {
      console.log("保存失败");
      throw err;
    });
});

/**
 * 更新商品页逻辑
 */
// 1、渲染更新商品页
router.get("/editshop", async (ctx, next) => {
  let shopId = ctx.request.query.id;
  let shop = await shopDB.findById(shopId);
  await ctx.render("./shopmanger/editshop", {
    title: "编辑商品",
    user: ctx.session.user,
    shop
  });
});

//2、保存更新商品信息到数据库
router.post("/editshop", async (ctx, next) => {
  let formReq = ctx.request.body;
  await shopDB
    .findByIdAndUpdate(formReq.id, formReq)
    .then(shop => {
      console.log(shop);
      ctx.status = 200;
      ctx.body = {
        code: 1,
        msg: "更新成功"
      };
    })
    .catch(err => {
      console.log("更新失败");
      throw err;
    });
});

/**
 * 删除商品逻辑
 */
router.get("/deleteshop", async (ctx, next) => {
  let shopId = ctx.request.query.id;
  await shopDB
    .findByIdAndDelete(shopId)
    .then(() => {
      console.log("删除成功");
      ctx.response.redirect("/shopmanger");
    })
    .catch(err => {
      console.log("删除失败");
      throw err;
    });
});

module.exports = router;

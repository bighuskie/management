// 判断登录权限
exports.loginJudge = async (ctx, next) => {
  let routeName = ctx.request.url;
  if (routeName === "/login" || routeName === "/register") {
    await next();
  } else {
    if (ctx.session.user) {
      await next();
    } else {
      ctx.redirect("/login");
    }
  }
};

/**
 * 保存商品信息
 */
exports.saveShop = async (Db, req) => {
  await new Db(req)
    .save()
    .then(shop => {
      console.log(shop);
    })
    .catch(err => {
      console.log("保存失败");
      throw err;
    });
};

/**
 * 保存更新商品信息到数据库
 */
exports.updateShop = (DB, id, req) => {
  DB.findByIdAndUpdate(id, req)
    .then(shop => {
      console.log(shop);
    })
    .catch(err => {
      console.log("更新失败");
      throw err;
    });
};

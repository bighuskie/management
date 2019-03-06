const fs = require("fs");
const path = require("path");

exports.upload = async ctx => {
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  // 创建可读流
  const reader = await fs.createReadStream(file.path);
  let filePath = path.join(__dirname, "public/upload/") + `/${file.name}`;
  // 创建可写流
  const upStream = await fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  await reader.pipe(upStream);
  console.log(file);
  return filePath;
};

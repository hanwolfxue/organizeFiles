var fs = require("fs");

// 创建视频，音乐, 图片, 文档, 其它四个文件夹
const createFolder = (path) => {
  try {
    fs.mkdirSync(`${path}/视频`);
    console.log("目录创建成功");
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("目录已存在");
    } else {
      console.error(error);
    }
  }
  try {
    fs.mkdirSync(`${path}/音乐`);
    console.log("目录创建成功");
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("目录已存在");
    } else {
      console.error(error);
    }
  }
  try {
    fs.mkdirSync(`${path}/图片`);
    console.log("目录创建成功");
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("目录已存在");
    } else {
      console.error(error);
    }
  }
  try {
    fs.mkdirSync(`${path}/文档`);
    console.log("目录创建成功");
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("目录已存在");
    } else {
      console.error(error);
    }
  }
  try {
    fs.mkdirSync(`${path}/其它`);
    console.log("目录创建成功");
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("目录已存在");
    } else {
      console.error(error);
    }
  }
};

const mvFile = (path) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      return console.log("err", err);
    }
    files.forEach((file) => {
      const filePath = `${path}/${file}`;
      fs.stat(filePath, (err, stats) => {
        if (err) {
          return console.log(err);
        }
        if (stats.isFile()) {
          const arr = file.split(".");
          const fileFormat = arr[arr.length - 1];
          if (["png"].includes(fileFormat)) {
            console.log("这是图片");
            var readStream = fs.createReadStream(filePath);
            var writeStream = fs.createWriteStream(`${path}/图片/${file}`);
            readStream.pipe(writeStream);
            readStream.on("end", () => {
              fs.unlink(filePath, function (err) {
                if (err) {
                  return console.error(err);
                }
                console.log("文件删除成功！");
              });
            });
          }
          if (["xlsx", "txt", "pptx"].includes(fileFormat)) {
            console.log("这是文档");
            console.log(
              "file: mvFile.js ~ line 89 ~ fs.stat ~ filePath",
              filePath,
            );
            var readStream = fs.createReadStream(filePath);
            var writeStream = fs.createWriteStream(`${path}/文档/${file}`);
            readStream.pipe(writeStream);
            readStream.on("end", () => {
              fs.unlink(filePath, function (err) {
                if (err) {
                  return console.error(err);
                }
                console.log("文件删除成功！");
              });
            });
          }
          if (["mov"].includes(fileFormat)) {
            console.log("这是视频");
            var readStream = fs.createReadStream(filePath);
            var writeStream = fs.createWriteStream(`${path}/视频/${file}`);
            readStream.pipe(writeStream);
            readStream.on("end", () => {
              fs.unlink(filePath, function (err) {
                if (err) {
                  return console.error(err);
                }
                console.log("文件删除成功！");
              });
            });
          }
        }
      });
    });
  });
};

createFolder('./test')
mvFile("./test");

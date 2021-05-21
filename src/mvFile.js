var fs = require("fs");
var {
  VIDEO_TYPE,
  MUSIC_TYPE,
  PICTURE_TYPE,
  DOCUMENT_TYPE,
  PROGRAM_TYPE,
  ZIP_TYPE
} = require("./fileType");

const mvFile = (path, folders) => {
  // 创建视频，音乐, 图片, 文档, 其它四个文件夹
  const createFolder = (path) => {
    folders.forEach(item => {
      try {
        fs.mkdirSync(`${path}/${item}`);
        console.log("目录创建成功");
      } catch (error) {
        if (error.code === "EEXIST") {
          console.log("目录已存在");
        } else {
          console.error(error);
        }
      }
    })
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
            const fileFormat = arr[arr.length - 1].toLowerCase();
            if (PICTURE_TYPE.includes(fileFormat) && folders.find(i => i === '图片')) {
              var readStream = fs.createReadStream(filePath);
              var writeStream = fs.createWriteStream(`${path}/图片/${file}`);
              readStream.pipe(writeStream);
              readStream.on("end", () => {
                fs.unlink(filePath, function (err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              });
            } else if (DOCUMENT_TYPE.includes(fileFormat) && folders.find(i => i === '文档')) {
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
                });
              });
            } else if (VIDEO_TYPE.includes(fileFormat) && folders.find(i => i === '视频')) {
              var readStream = fs.createReadStream(filePath);
              var writeStream = fs.createWriteStream(`${path}/视频/${file}`);
              readStream.pipe(writeStream);
              readStream.on("end", () => {
                fs.unlink(filePath, function (err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              });
            } else if (MUSIC_TYPE.includes(fileFormat) && folders.find(i => i === '音乐')) {
              var readStream = fs.createReadStream(filePath);
              var writeStream = fs.createWriteStream(`${path}/音乐/${file}`);
              readStream.pipe(writeStream);
              readStream.on("end", () => {
                fs.unlink(filePath, function (err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              });
            } else if (PROGRAM_TYPE.includes(fileFormat) && folders.find(i => i === '编程')) {
              var readStream = fs.createReadStream(filePath);
              var writeStream = fs.createWriteStream(`${path}/编程/${file}`);
              readStream.pipe(writeStream);
              readStream.on("end", () => {
                fs.unlink(filePath, function (err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              });
            } else if (ZIP_TYPE.includes(fileFormat) && folders.find(i => i === '压缩包')) {
              var readStream = fs.createReadStream(filePath);
              var writeStream = fs.createWriteStream(`${path}/压缩包/${file}`);
              readStream.pipe(writeStream);
              readStream.on("end", () => {
                fs.unlink(filePath, function (err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              });
            } else if(folders.find(i => i === '其它')){
              var readStream = fs.createReadStream(filePath);
              var writeStream = fs.createWriteStream(`${path}/其它/${file}`);
              readStream.pipe(writeStream);
              readStream.on("end", () => {
                fs.unlink(filePath, function (err) {
                  if (err) {
                    return console.error(err);
                  }
                });
              });
            }
          }
        });
      });
    });
  };

  createFolder(path);
  mvFile(path);
};

module.exports = mvFile;

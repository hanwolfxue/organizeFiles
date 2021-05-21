const mvFile = require('./src/mvFile')
// 需要整理的文件夹路径
const path = '/Users/kaiyuyuan/Downloads/其它'
// 
/** 需要生成的文件夹
 * 可选值
 * 视频、音乐、图片、文档、其它、编程、压缩包
 */
const folders = ['编程', '压缩包']

mvFile(path, folders)
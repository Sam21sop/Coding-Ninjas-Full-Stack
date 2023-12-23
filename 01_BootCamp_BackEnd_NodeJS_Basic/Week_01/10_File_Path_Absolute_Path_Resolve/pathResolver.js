const path = require('path')

exports.getAbsolutePath = (filePath) => {
  // get the current directory
  const currentDir = process.cwd();

  // construct absolute path by joining current dir and relative path
  // return absolute path
  return path.resolve(currentDir, filePath)  
};

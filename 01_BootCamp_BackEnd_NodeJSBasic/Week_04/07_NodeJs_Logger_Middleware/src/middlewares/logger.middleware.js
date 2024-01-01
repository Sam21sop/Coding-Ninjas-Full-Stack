// Please don't change the pre-written code
// Import the necessary modules here
import fs from 'fs';

// Write your code here
const fsPromises = fs.promises;

async function logger(loggerData) {
  try {
    loggerData = `${new Date().toString()} - ${loggerData}`;
    await fsPromises.appendFile('log.txt', loggerData);
  } catch (error) {
    console.log(error);
  }
}


export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  if (req.url.includes("/api/user")) {
    const loggerData = `req URL: ${req.url} reqBody: ${JSON.stringify(req.body)}`;
    await logger(loggerData)
  };
  next();
};
export default loggerMiddleware;

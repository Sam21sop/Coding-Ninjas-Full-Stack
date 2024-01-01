// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'combined.log' })
  ]
});


export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  const timestamp = new Date().toString();
  const reqURL = req.originalUrl;
  const reqBody = JSON.stringify(req.body);

  logger.info(`${timestamp}\nreq URL: ${reqURL}\nreqBody: ${reqBody}`);
  next();
};
export default loggerMiddleware;

// import express
import express from 'express';

// import tweet controller
import { getTweets, createTweet } from './tweet.controller.js';


// initialize express router
const router = express.Router();

router.get('/', getTweets);

router.post('/', createTweet);


// export router
export default router;
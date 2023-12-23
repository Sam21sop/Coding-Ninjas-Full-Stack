// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if(req.method == "POST")
  {
    let body = '';
  
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      fs.appendFileSync('data.txt', body);

      console.log(fs.readFileSync('data.txt', {encoding : 'utf8'}));
    });
  }

  res.end("data received");
});

export default server;

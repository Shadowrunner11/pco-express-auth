const express = require('express');
const { join } = require('path');

const app = express();
const port = process.env.PORT ?? 3000;

const publicPath = join(__dirname, 'public');

app
  .use(express.static(publicPath))
  .listen(port, ()=>{
      console.log(`Server is running on port ${port}`);
  })


/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const { join } = require('path');

const app = express();
const port = process.env.PORT ?? 3000;

const isLocalDev = !!process.env.IS_LOCAL_DEV

const publicPath = join(__dirname, isLocalDev? '..' : '', 'storybook-static',);

app
  .use(express.static(publicPath))
  .listen(port, ()=>{
      console.log(`Server is running on port ${port}`);
  })


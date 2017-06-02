const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors');

const router = require('./router.js')

app
  .use(bodyparser())
  .use(router.routes())

app.listen(3001);

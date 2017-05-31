const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors');

app.use(ctx => {
  ctx.body = 'Hello Bro!'
});

app.listen(3000);

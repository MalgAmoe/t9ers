const router = require('koa-router')();

router
  .post('/number', async(ctx, next) => {
    const number = ctx.request.body;
    ctx.response.body = number;
    ctx.status = 200;
    next();
  })

module.exports = router;

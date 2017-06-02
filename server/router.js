const router = require('koa-router')();
const transform = require('./numberToString');

router
  .post('/number', async(ctx, next) => {
    const data = ctx.request.body;
    ctx.response.body = transform.getPossibleWordsFromNumbers(data.number);
    ctx.status = 200;
    next();
  })

module.exports = router;

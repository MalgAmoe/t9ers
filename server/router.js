const router = require('koa-router')();
const transform = require('./numberToString');

router
  .post('/number', async(ctx, next) => {
    const data = ctx.request.body;
    if(data.numbers) {
      ctx.response.body = transform.getPossibleWordsFromNumbers(data.numbers);
    }
    ctx.status = 200;
    next();
  })

module.exports = router;

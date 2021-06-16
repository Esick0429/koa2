const Router = require('koa-router');
const router = new Router();
const list  = require('./list')
console.log(list)
router.get('/test/',async (ctx)=> {
    ctx.body = "首页"
})
router.get('/test/list',async (ctx)=> {
    ctx.body = "列表"
})

router.post('/test/list/wtf',list.wtf);
router.post('/test/list/delete',list.delete)
module.exports =  router
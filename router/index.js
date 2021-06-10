const Router = require('koa-router');
const router = new Router();
const list  = require('./list')

router.get('/test/',async (ctx)=> {
    ctx.body = "首页"
})
router.get('/test/list',async (ctx)=> {
    ctx.body = "列表"
})

router.get('/test/list/music',list.music);
router.get('/test/list/mylist',list.mylist);
router.post('/test/list/wtf',list.wtf)
module.exports =  router
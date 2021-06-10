const Koa = require('koa2')

const app = new Koa();
const port = 3000;
app.use(async (ctx , next) => {
    console.log(1);
    await next();
    console.log(1);
})

app.use(async (ctx , next) => {
    console.log(2);
    await next();
    console.log(3);
})
app.use(async (ctx , next) => {
    console.log(3);
})

app.listen(port, ()=>{
    console.log('running')
})
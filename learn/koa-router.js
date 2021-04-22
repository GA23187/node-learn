const Koa = require('koa')
const bodyParser = require('koa-bodyParser')
const KoaRouter = require('koa-router')
//初始化
const app = new Koa()
const router = new KoaRouter()
// 注册中间件
app.use(bodyParser()) //这个注册顺序不能变
app.use(router.routes())
router.get('/', async (ctx, next) => {
    console.log(ctx.method)
    console.log(ctx.query)// ?key=value => {key: value}
    ctx.response.body = '<h1>表单提交</h1>' + '<form action="/login" method="post">' + '<p>Name:<input name="name"></input></p>' + 'PassWord<input type="password" name="password">' + '<input type="submit" value="submit">' + '</form>'
})
// 匹配路由 /前端/js入门文章
router.get('/:category/:title', async (ctx, next) => {
    console.log(ctx.params)
    console.log(ctx.query)
    ctx.response.body = '地址栏'+ctx.params.category+'/'+ctx.params.title
})
router.post('/login',async(ctx,next)=>{
    let name = ctx.request.body.name|| ''
    let password = ctx.request.body.password||''
    console.log(ctx.request)
    if(name === 'admin'&&password ==="admin"){
        ctx.body = "success"
    }else {
        ctx.body = "login error"
    }
})
app.listen(3000, () => {
    console.log('server run! listen on 3000')
})
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const User = require('./app/api/checkage')
const App = new Koa()
const router = new Router()
const cors = require('koa2-cors')

App.use(bodyParser())
App.use(cors())


router.post('/senduser',async function(context){
    let data = context.request.body
    context.body = data
})

router.get('/:name',async function(context){
    console.log(context.params.name)
    context.body = context.params.name
})
router.get('/:name/:age',async function(context){
    let data = {
        name:context.params.name,
        age:context.params.age
    }
    context.body = data
})

router.use('/user',User.routes())
App.use(router.routes())
App.use(router.allowedMethods())

// App.use(async ctx => {
//     ctx.body = 'Hello World 5'
// })

App.listen(3000)
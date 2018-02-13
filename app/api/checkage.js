const Router = require('koa-router')
const User = new Router()

User.post('/checkage',async function(context){
    let data = context.request.body
    var d = new Date();
    var n = d.getFullYear()+543;
    if(data.year+20>n) context.body = "child"
    else  context.body = "Adult"
})

module.exports = User
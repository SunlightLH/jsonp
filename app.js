const Koa = require("koa");
const app = new Koa();
app.use(function(ctx){
  ctx.body = ctx.query.callback+"("+123+")";
})
app.listen(3000)
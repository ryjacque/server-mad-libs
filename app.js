const Express = require("express")
const app=Express()
const PORT = 4000;
const mainRoutes = require('./mainroutes')
const res = require("express/lib/response");

// const res = require("express/lib/response");
app.use(Express.static(__dirname+'/public'));
app.use(Express.urlencoded({extended: true}));
app.use(mainRoutes)
app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})
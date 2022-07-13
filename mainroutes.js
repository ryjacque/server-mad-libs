const router = require("express").Router();
let verb;
let adjective;
let noun;
let adjective2;
let timeLength;
let verb2;
let noun2;
let story;

router.get("/", (req, res)=>{
    res.render("index")
})
router.get("/first-word", (req, res)=>{
    res.sendFile(__dirname+"/public/form.html")
})
router.post("/second-word", (req, res)=>{
    const {first} = req.body
    verb=first;
    res.sendFile(__dirname+"/public/form.html")
})
router.post("/third-word", (req, res)=>{
    const {second} = req.body
    adjective=second;
    res.sendFile(__dirname+`/public/form.html`)
})
router.post("/fourth-word", (req, res)=>{
    const {third} = req.body;
    noun = third;
    res.sendFile(__dirname+'/public/form.html')
})
router.post("/fifth-word", (req, res)=>{
    const {fourth} = req.body;
    adjective2 = fourth;
    res.sendFile(__dirname+'/public/form.html')
})
router.post("/sixth-word", (req, res)=>{
    const {fifth} = req.body;
    timeLength = fifth;
    res.sendFile(__dirname+'/public/form.html')
})
router.post("/seventh-word", (req, res)=>{
    const {sixth} = req.body;
    verb2 = sixth;
    res.sendFile(__dirname+'/public/form.html')
})
router.post("/story", (req, res)=>{
    const { seventh } = req.body
    noun2 = seventh;
    res.redirect('/story')
})
router.get("/story", (req, res)=>{
    story=(`<div>Just go <strong>${verb}</strong> that <strong>${adjective}</strong> <strong>${noun}</strong>, it's been a <strong>${adjective2}</strong> <strong>${timeLength}</strong> and we want to <strong>${verb2}</strong> the <strong>${noun2}</strong></div>`)
    res.send(`<body style = "display: flex; flex-direction: column; justify-content: space-around; align-items: center; text-align:center;"><div id="story" style="font-size:2rem; margin: 3vw;">${story}</div><form action="http://localhost:4000/" method="get"><h2>Would you like to play again?</h2><form><button type="submit">Again!</button></form><body>`)
})


module.exports = router;

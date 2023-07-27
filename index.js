import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
const worktasks = []
const normaltasks=[]

app.get("/", (req,res) => {
    console.log(worktasks)
    res.render('index.ejs',{
        worktasks: worktasks,
        othertasks: normaltasks
    })
})
app.get("/about", (req,res)=>{
    res.render('about.ejs')
})

app.get("/addtask", (req,res) => {
    res.render('addtask.ejs')
})

app.post("/addtask", (req, res) => {
    console.log(req.body)
    if(req.body.tasktype == 'work'){
        worktasks.push(req.body.task)
    }
    else {
        normaltasks.push(req.body.task)
    }
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
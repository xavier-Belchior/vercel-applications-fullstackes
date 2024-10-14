const express=require('express')
const app =express()

app.use('/', (req, res)=>{
    res.send("server is runnig")
})
app.listen(5000, console.log(
    "running on Port 5000"
));
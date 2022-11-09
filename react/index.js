// // const superheroes = require('superheroes');
 
// // superheroes.all;
// // //=> ['3-D Man', 'A-Bomb', …]
 
// // var hero=superheroes.random();
// // console.log(hero);


// // 2 ways to use function 

// let aa="shiva"

// for(let i=0;i<10;i++){
//     console.log(add(1,3));
// }
// function add(a,b){
//     console.log(aa);
//     return a+b;
// }

// const sub= (a,b)=>{
//     return a-b;
// }

// // const obj={
// //     addition : add
// //     substraction: sub
// // }


const express =require("express");
const bodyParser= require("body-parser");
const mongoose = require("mongoose");
const { request } = require("express");
const app=express();
app.use(bodyParser.json());
const port=5000;


const allTasks=[
    {
        id: 1,
        task: "code Express"
    }, 
    {
        id: 2,
        task: "sleep"
    }
]


app.get("/tasks",function(req,res){
    return res.json(allTasks);
});

app.post("/tasks",function(req,res){
    const body =res.body
    return res.json(body);
})


app.delete("/tasks/:id",(req,res)=>{
    const id=req.params.id;
    return res.json(allTasks.filter((el)=>el.id!=id));
})


app.listen(port,()=>{
    console.log(
        'Listening '
    )
})


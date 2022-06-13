const express=require('express')

const app=express()


const PORT=3000

// const list=require('./model/options')
// app.get('/',(req,res)=>{
// res.send('good job!')
// })
//! "Greeting express application created."

// app.get('/greeting',(req,res)=>{
//     res.send('Hello,stranger')
//     })

//     app.get('/greeting/:name',(req,res)=>{
//         res.send("What's up "+ req.params.name)
//         })
    
//! "Tip Calculator express application created."

// app.get('/tip/:total/:tipPercentage',(req,res)=>{
//  res.send("You should pay: "+(req.params.tipPercentage/100)*req.params.total )
//     })

// ! "Magic 8 Ball express application created."
// const options=
// ["It is certain", 
// "It is decidedly so", 
// "Without a doubt", 
// "Yes definitely",
// "You may rely on it", 
// "As I see it yes", 
// "Most likely", 
// "Outlook good",
// "Yes", 
// "Signs point to yes", 
// "Reply hazy try again", 
// "Ask again later",
// "Better not tell you now", 
// "Cannot predict now", 
// "Concentrate and ask again",
// "Don't count on it", 
// "My reply is no", 
// "My sources say no",
// "Outlook not so good",
//  "Very doubtful"
// ]
//     app.get('/magic/:Will%20I%20Be%20A%20Millionaire',(req,res)=>{
//         let output=options[Math.floor(Math.random()*options.length)]
//         res.send(`<h1>${output}</h1>`)
//         })
// !Take one Down and Pass it Around
app.use((req,res,next)=>{
    console.log('Running middleware function!!!')
    next()
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
    app.set('view engine', 'ejs') 
    app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('round'
    ,{
        title:'Take one and pass around',
        bottle:'CLICK' 
    })
    })

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)

})

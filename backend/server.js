const express = require('express')
const app = express()
//const cors=require('cors')
const PORT = 5000 ;
const database=require('./config/connexion');
const authRouter = require('./routes/auth')
const animeRouter = require('./routes/anime')
const userRouter = require('./routes/user')
const newsRouter = require('./routes/news')
const commentRouter =require('./routes/comment')



database();

//middlewares
app.use(express.json())
/*const corsOptions = {     origin : "http://localhost:3000",  
       credentials: true,   
      "allowedHeaders": ["Content-Type"],    
       //"exposedHeaders": ["sessionId"],  
         "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",     "preflightContinue": false 
        } 
        app.options('*',cors())*/
app.use("/animeapp",authRouter);
//app.use("/animeapp/anime",animeRouter);
//app.use("/animeapp/user",userRouter);
//app.use("/animeapp/news",newsRouter);
//app.use("/animeapp/comment",commentRouter);


app.listen(PORT, () => console.log(`running on ${PORT}`));

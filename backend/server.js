const express = require('express')
const app = express()
const PORT = 5000 ;
const database=require('./config/connexion');
const authRouter = require('./routes/auth')
const animeRouter = require('./routes/anime')
const userRouter = require('./routes/user')
const newsRouter = require('./routes/news')
const commentRouter =require('./routes/comment')



database();

//middlewares
//app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.use("/animeapp",authRouter);
app.use("/animeapp/anime",animeRouter);
app.use("/animeapp/user",userRouter);
app.use("/animeapp/news",newsRouter);
app.use("/animeapp/comment",commentRouter);


app.listen(PORT, () => console.log(`running on ${PORT}`));

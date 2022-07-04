const express=require("express");
const app=express(); 
const cors=require('cors');
const db=require('./models');

app.use(express.json());
app.use(cors());

// routers 

const postRouter=require("./Routes/Posts");
app.use("/posts",postRouter);
const commentsRouter=require("./Routes/Comments");
app.use("/comments",commentsRouter);
const usersRouter=require("./Routes/Users");
app.use("/auth",usersRouter);
//db.sequelize will look to the tables in the  models folder check if they dont  exist in the database create the table
db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Server is running on port 3001");
    });
});

const mongoose = require("mongoose");

const localDB = 'mongodb+srv://users:GREAVSfB6acsoLJ9@cluster0.yfbr7.mongodb.net/exam_challenge?retryWrites=true&w=majority';
mongoose.set("useFindAndModify",false);

mongoose.connect(localDB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log("connected to DB"))
.catch(err=>console.log("error with DB"))
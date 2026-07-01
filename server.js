const express = require("express");
const app = express();
const PORT = process.env.PORT || 5100;
const mongoose=require("mongoose")
const employeeRoutes = require("./routes/employeeRoutes");
const cors =require("cors")
const loggerMiddleware = require("./middleware/loggerMiddleware");


// Middleware
app.use(cors())
app.use(express.json());

app.use(loggerMiddleware);
app.use("/employees", employeeRoutes);
app.get("/", (req, res) => {

  res.send("Employee Management API Running");

});


// Handling GET requests
// app.get("/", (req, res) => {
//   res.send("Hello, Express! This is a GET request.");
// });

// app.get("/bollywood", (req, res) => {
//   // res.send(data);
//   const result = data.filter((item) => item.category === "Bollywood");
//   res.send(result);
// });

// app.get("/hollywood", (req, res) => {
//   const userId = req.params.id;
//   res.send(`This is a PUT request for user with ID ${userId}`);
// });

// app.get("/food", (req, res) => {
//     const foodData=data.filter((item)=>item.category==="Food")
//     res.send(foodData   )
// });

mongoose.connect("mongodb://backend:9873754056@cluster0-shard-00-00.sbrgl.mongodb.net:27017,cluster0-shard-00-01.sbrgl.mongodb.net:27017,cluster0-shard-00-02.sbrgl.mongodb.net:27017/?ssl=true&replicaSet=atlas-efi1bs-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{
  console.log("DB connected")

})
.catch((err)=>{
  console.log(err)

});


// Start the server
app.listen(PORT, () => {
  console.log(`Express server listening at http://localhost:${PORT}`);
});

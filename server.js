const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/model.js')
const ProductMain = require('./models/model.js')
const app = express();

app.use(express.json())

//routes

app.get("/", (req, res) => {
  res.send("Hello to the recipes API!");
});

app.get("/blog", (req, res) => {
  res.send("Hello to the blog!");
});

app.post('/soup', async(req, res) => {
   try {
    const soup = await Product.create(req.body)
    res.status(200).json(soup);
   } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
   }
    
})

app.post('/main', async(req, res) => {
    try {
     const main = await ProductMain.create(req.body)
     res.status(200).json(main);
    } catch (error) {
     console.log(error.message)
     res.status(500).json({message: error.message})
    }
     
 })

mongoose.set("strictQuery", false)
mongoose
  .connect(
    "mongodb+srv://semraelifalinli:pkl1orbc@turkishrecipes.pid5hsc.mongodb.net/Recipe-Book?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => {
      console.log("Turkish Recipes app is running on port 3000.");
    });
  })
  .catch((err) => {
    console.log(err);
  });

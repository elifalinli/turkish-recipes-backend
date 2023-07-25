require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { Soup, Main, Salad } = require("./models/model.js");
const app = express();

const credentials = process.env.CREDENTIALS;


app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send("Hello to the recipes API!");
});

app.get("/soup", async (req, res) => {
  try {
    const soups = await Soup.find({});
    res.status(200).json(soups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/main", async (req, res) => {
  try {
    const mains = await Main.find({});
    res.status(200).json(mains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/salad", async (req, res) => {
  try {
    const salads = await Salad.find({});
    res.status(200).json(salads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/main/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const main = await Main.findById(id);
    res.status(200).json(main);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/soup/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const soup = await Soup.findById(id);
    res.status(200).json(soup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/salad/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const salad = await Salad.findById(id);
    res.status(200).json(salad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/soup", async (req, res) => {
  try {
    const soup = await Soup.create(req.body);
    res.status(201).json(soup);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/main", async (req, res) => {
  try {
    const main = await Main.create(req.body);
    res.status(201).json(main);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/salad", async (req, res) => {
  try {
    const salad = await Salad.create(req.body);
    res.status(201).json(salad);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.patch("/soup/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const soup = await Soup.findByIdAndUpdate(id, req.body);
    if (!soup) {
      return res
        .status(404)
        .json({ message: `cannot find any soups with id ${id}` });
    }
    res.status(200).json(soup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/salad/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const salad = await Salad.findByIdAndUpdate(id, req.body);
    if (!salad) {
      return res
        .status(404)
        .json({ message: `cannot find any salads with id ${id}` });
    }
    res.status(200).json(salad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/main/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const main = await Main.findByIdAndUpdate(id, req.body);
    if (!main) {
      return res
        .status(404)
        .json({ message: `cannot find any mains with id ${id}` });
    }
    res.status(200).json(main);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/soup/:id", async(req,res) => {
  try {
    const {id} = req.params;
    const soup = await Soup.findByIdAndDelete(id);
    if(!soup) {
      return res.status(404).json({ message: `Cannot find any soup with id ${id}`})
    }
    res.status(204).json(soup)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

app.delete("/salad/:id", async(req,res) => {
  try {
    const {id} = req.params;
    const salad = await Salad.findByIdAndDelete(id);
    if(!salad) {
      return res.status(404).json({ message: `Cannot find any salad with id ${id}`})
    }
    res.status(204).json(salad)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

app.delete("/main/:id", async(req,res) => {
  try {
    const {id} = req.params;
    const main = await Main.findByIdAndDelete(id);
    if(!main) {
      return res.status(404).json({ message: `Cannot find any main with id ${id}`})
    }
    res.status(204).json(main)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

mongoose.set("strictQuery", false);
mongoose
  .connect(credentials)
  .then(() => {
    console.log("connected to mongodb");
    app.listen( 3000, () => {
      console.log(`Turkish Recipes app is running on port 3000.`);
    });
   })
  .catch((err) => {
    console.log(err);
  });

const express = require('express')
const app = express()

//routes

app.get('/', (req, res) => {
    res.send('Hello to the recipes API!')
})

app.listen(3000, () => {
    console.log("Turkish Recipes app is running on port 3000.")
})
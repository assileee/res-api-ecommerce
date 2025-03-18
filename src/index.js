const express = require("express")
const app = express()
const port = 3000
const userRoutes = require("./routes/users")

// MIDDLEWARE
app.use(express.json())
    app.use((req, res, next) => {
        req.requestTime = Date.now();
        req.arithmetical_value = 4 * 7; 
        next();
});

// ROUTES
app.use("/api/users", userRoutes)

// ecommerce
app.get("/", (req, res) => {
    res.send("Welcome to my API ! e-commerce backed 🤳")
   })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


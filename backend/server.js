require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

// Middleware
app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    }

));

// Routes Middleware Refactor
app.use("/api/users", userRoute)

// Routes
app.get("/", (req, res) => {
    res.send("Home Page")
});

// Error Handler
app.use(errorHandler)

// Connect with mongodb and start sever
mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err) => console.log(err));
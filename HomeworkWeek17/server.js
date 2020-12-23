//dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// express
const app = express();
const PORT = process.env.PORT || 3030;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//db mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})
//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//start server
app.listen(PORT, function () {
    console.log(`App listening on Port ${PORT}!`);
});
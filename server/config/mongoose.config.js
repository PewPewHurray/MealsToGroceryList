const mongoose = require("mongoose");
const dbName = "mealsGroceryListDB";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Connected to ${dbName} database!`))
    .catch((err) => console.log("Something went wrong when connection to the database", err));         
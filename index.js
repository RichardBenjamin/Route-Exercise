const express = require("express")
const shopRoute = require("./routes/app")

const app = express();

app.use(express.json())
app.use("/api/v1", shopRoute)

app.listen(700, () => {
    console.log("server has started");
})
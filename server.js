const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://yazeedmomani:Marius%402021@free-cluster.bx6mu6s.mongodb.net/body-metrics?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connection successful."))
  .catch((error) => console.log("Database connection failed", error));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

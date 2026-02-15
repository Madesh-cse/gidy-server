import app from "./app";
import { connectToDB } from "./db/connection";
import { config } from "dotenv";

config();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Gidy Profile page is running");
});

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

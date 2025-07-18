import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(`Error!! ${error}`);
      process.exit(1);
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`App listening on this port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(`Mongo DB Connection Failed!! ${err}`));

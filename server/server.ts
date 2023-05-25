import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./src/routes";
import * as cors from 'cors';

const app = express();

// Call middlewares
app.use(bodyParser.json());

//Set all routes from routes folder
app.use("/", cors() ,routes);

app.listen(3001, () => {
  console.log("Server started on port 3001!");
});

import {app} from "./app.js"
import { Connectdb } from "./data/database.js";

Connectdb();
app.listen(5000,()=>{
    console.log("Listening on port 5000");
})
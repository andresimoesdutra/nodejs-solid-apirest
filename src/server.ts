import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize();
app.listen(8023, () => console.log("\n- Server is running on: http://localhost:8023/ \n"));
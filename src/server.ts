import app from "./app";
import appDataSource from "./data-source";

appDataSource
  .initialize()
  .then(() => {
    console.log("server connected");

    app.listen(3001, () => {
      console.log("server in running on port 3001");
    });
  })
  .catch((err) => console.error(err));

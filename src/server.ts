import app from "./app";
import appDataSource from "./data-source";

appDataSource
  .initialize()
  .then(() => {
    console.log("server connected");

    app.listen(3000, () => {
      console.log("server in running on port 3000");
    });
  })
  .catch((err) => console.error(err));

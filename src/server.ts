import app from "./app";
import appDataSource from "./data-source";

appDataSource
  .initialize()
  .then(() => {
    console.log("server connected");

    const port: number = Number(process.env.PORT) || 3001;
    app.listen(port, "0.0.0.0", () =>
      console.log(`server in running on port ${port}`)
    );
  })
  .catch((err) => console.error(err));

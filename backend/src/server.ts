import app from "./app";
import connectDB from "./config/db";
import env from "./config/env";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(
        `Server is listening at: http://localhost:${env.PORT}/api/v1`,
      );
    });
  } catch (error) {}
};

startServer();

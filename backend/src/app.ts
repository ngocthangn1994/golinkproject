import express from "express";
import cors from "cors";
import router from "./routes/linkRoutes";
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "The server is healthy.",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "The server is healthy.",
  });
});

app.use("/api/v1/links", router);

export default app;

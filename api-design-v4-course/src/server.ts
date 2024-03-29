import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("hello"));
  }, 1);
});

app.use("/api", protect, router); // making sure the user is authenticated before accessing routes

app.post("/user", createNewUser);
app.post("/signin", signin);

// Error handler to be located at the end to catch both synchronous and asynchronous error
app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "input invalid" });
  } else {
    res.status(50);
  }
});

export default app;

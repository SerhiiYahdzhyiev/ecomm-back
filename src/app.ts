import { SECRET } from "./config/auth";

import express, { Express, json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import passport from "passport";

import {
  jsonMiddlewareOptions,
  urlencodedMiddlewareOptions,
} from "./config/app";

import { strategy } from "./common/passport/auth.strategy";
import { handleError } from "./common/middlewares/error.middleware";

import usersRouter from "./modules/users/users.routes";
import authRouter from "./modules/auth/auth.routes";

import { logger } from "./logger";
import { auth } from "./common/middlewares/auth.middleware";

passport.use(strategy);

const app: Express = express();

app.use(json(jsonMiddlewareOptions));
app.use(urlencoded(urlencodedMiddlewareOptions));
app.use(cookieParser(SECRET));

app.use(passport.initialize());

app.use("/users", auth, usersRouter);
app.use("/auth", authRouter);

app.use(handleError(logger));

export default app;

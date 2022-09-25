import { createRouter } from "../createRouter";
import { postRouter } from "./post";

export const appRouter = createRouter().merge(postRouter);

export type AppRouter = typeof appRouter;

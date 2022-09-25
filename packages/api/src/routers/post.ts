import { createRouter } from "../createRouter";
import { z } from "zod";

export const postRouter = createRouter().mutation("create", {
  input: z.object({
    title: z.string(),
    content: z.string(),
  }),
  async resolve({ input }) {
    const post = input;
    return post;
  },
});

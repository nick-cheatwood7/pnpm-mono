import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

/**
 * Creates context for incoming requests
 * @link https://trpc.io/docs/context
 */
export async function createContext({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) {
  return {
    req,
    res,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

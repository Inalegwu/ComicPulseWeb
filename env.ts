import { cleanEnv, url } from "envalid";

export const Env = cleanEnv(process.env, {
  POCKETBASE_URL: url(),
});

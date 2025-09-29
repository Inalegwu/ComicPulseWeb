import PocketBase from "pocketbase";
import { Env } from "~~/env";

export const pocket = new PocketBase(Env.POCKETBASE_URL);

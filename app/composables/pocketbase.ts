import PocketBase from "pocketbase";
import { Env } from "../../env";

export const usePocketbase=()=>{
    return new PocketBase(Env.POCKETBASE_URL)
}
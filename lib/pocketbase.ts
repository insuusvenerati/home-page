import Pocketbase from "pocketbase";

export const client = new Pocketbase(process.env.POCKETBASE_URL || "http://localhost:8090");

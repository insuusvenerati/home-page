import { Response } from "@remix-run/node";
import { client } from "lib/pocketbase";
import type { Record } from "pocketbase";
import { ClientResponseError } from "pocketbase";
import type ListResult from "types/pocketbase";

export interface ILinks extends ListResult<Record> {
  name: string;
  url: string;
}

export const getList = async (record: string) => {
  try {
    const result = await client.records.getList(record);
    return result as ILinks;
  } catch (error) {
    if (error instanceof ClientResponseError) {
      if (error.originalError.code === "ECONNREFUSED") {
        throw new Response("Pocketbase is not running", { status: 503 });
      }
      throw new Response("Oh No", {
        status: 500,
        statusText: error.message,
      });
    }
  }
};

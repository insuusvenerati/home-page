// To parse this data:
//
//   import { Convert, Links } from "./file";
//
//   const links = Convert.toLinks(json);

export interface Links {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Item[];
}

export interface Item {
  id: string;
  created: Date;
  updated: Date;
  "@collectionId": string;
  "@collectionName": string;
  name: string;
  url: string;
  "@expand": Expand;
}

export interface Expand {}

// Converts JSON strings to/from your types
export class Convert {
  public static toLinks(json: string): Links {
    return JSON.parse(json);
  }

  public static linksToJson(value: Links): string {
    return JSON.stringify(value);
  }
}

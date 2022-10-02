import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getList } from "util/getRecords";
import { Links as LinksComponent } from "~/components/links";

export const loader: LoaderFunction = async () => {
  const links = await getList("links");
  if (!links?.items || links?.items?.length < 1) {
    return new Response("No links found");
  }
  return links;
};

export default function Links() {
  const links = useLoaderData();
  return <LinksComponent links={links} />;
}

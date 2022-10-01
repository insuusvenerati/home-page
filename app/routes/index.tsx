import type { LoaderFunction } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { getList } from "util/getRecords";
import Error from "~/components/Error";
import { Links } from "~/components/links";
import SimpleSidebar from "~/components/Sidebar";

export const loader: LoaderFunction = async () => {
  const links = await getList("links");
  if (!links?.items || links?.items?.length < 1) {
    return new Response("No links found");
  }
  return links;
};

export default function Index() {
  const links = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SimpleSidebar>
        <Links links={links} />
      </SimpleSidebar>
    </div>
  );
}

export const CatchBoundary = () => {
  const caught = useCatch();

  return <Error message={caught.data} />;
};

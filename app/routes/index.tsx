import { Outlet, useCatch } from "@remix-run/react";
import Error from "~/components/Error";
import SimpleSidebar from "~/components/Sidebar";

export default function Index() {
  return (
    <SimpleSidebar>
      Welcome to the home page <Outlet />
    </SimpleSidebar>
  );
}

export const CatchBoundary = () => {
  const caught = useCatch();

  return <Error message={caught.data} />;
};

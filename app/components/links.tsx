import type { ILinks } from "util/getRecords";

export const Links = ({ links }: { links: ILinks }) => {
  return (
    <pre>
      <code>{JSON.stringify(links, null, 2)}</code>
    </pre>
  );
};

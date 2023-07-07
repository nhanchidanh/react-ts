import { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface PageProps {
  title: string;
  children: ReactNode | JSX.Element;
}

function Page({ title, children }: PageProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}

export default Page;

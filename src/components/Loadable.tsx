import React, { Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

type Props = {};

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<TopBarProgress />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;

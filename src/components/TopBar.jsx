import React from "react";
import { PageHeader } from "@patternfly/react-core";
import { TopLogo } from "./TopLogo";
import { TopToolbar } from "./TopToolbar";

export const TopBar = () => {
  const logo = <TopLogo />;
  const toolbar = <TopToolbar />;
  return (
    <PageHeader
      logo={logo}
      logoProps={{ href: "/" }}
      toolbar={toolbar}
      isNavOpen
    />
  );
};

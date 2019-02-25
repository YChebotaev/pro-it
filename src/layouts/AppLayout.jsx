import React from "react";
import { Page, PageSection, PageSectionVariants } from "@patternfly/react-core";
import { TopBar } from "../components/TopBar";
import { Sider } from "../components/Sider";

export const AppLayout = ({ children }) => {
  const header = <TopBar />;
  const sidebar = <Sider />;
  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection variant={PageSectionVariants.light}>{children}</PageSection>
    </Page>
  );
};

import React from "react";
import {
  PageSidebar,
  Nav,
  NavList,
  NavItem,
  NavVariants
} from "@patternfly/react-core";
import { withRouter } from "react-router";

const Navigation = withRouter(({ match }) => {
  return (
    <Nav>
      <NavList variant={NavVariants.simple}>
        <NavItem
          to="/services/"
          itemId={0}
          isActive={match.path.indexOf("/services/") >= 0}
        >
          Услуги
        </NavItem>
        <NavItem
          to="/departaments/"
          itemId={1}
          isActive={match.path.indexOf("/departaments/") >= 0}
        >
          Подразделения
        </NavItem>
      </NavList>
    </Nav>
  );
});

export const Sider = () => {
  const nav = <Navigation />;
  return <PageSidebar nav={nav} />;
};

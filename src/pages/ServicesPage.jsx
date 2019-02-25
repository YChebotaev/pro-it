import React from "react";
import {
  Bullseye,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Button
} from "@patternfly/react-core";
import { AppLayout } from "../layouts/AppLayout";
import { useServices } from "../hooks/useServices";
import { ServicesTable } from "../tables/ServicesTable";
import { withRouter } from "react-router";
import { ShowError } from "../components/ShowError";

export const ServicesPage = withRouter(({ history }) => {
  const { items, loading, error } = useServices();

  const handleAddService = event => {
    event.preventDefault();
    history.push("/services/add");
  };

  if (loading) {
    return (
      <AppLayout>
        <Bullseye>Loading...</Bullseye>
      </AppLayout>
    );
  }

  if (error) {
    return <ShowError error={error} />;
  }

  return (
    <AppLayout>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem>
            <Button onClick={handleAddService}>Добавить услугу</Button>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
      <ServicesTable items={items} />
    </AppLayout>
  );
});

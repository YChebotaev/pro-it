import React from "react";
import {
  Bullseye,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Button
} from "@patternfly/react-core";
import { AppLayout } from "../layouts/AppLayout";
import { useDepartaments } from "../hooks/useDepartaments";
import { DepartamentsTable } from "../tables/DepartamentsTable";
import { withRouter } from "react-router";

export const DepartamentsPage = withRouter(({ history }) => {
  const { items, loading } = useDepartaments();

  const handleAddDepartament = event => {
    event.preventDefault();
    history.push("/departaments/add");
  };

  if (loading) {
    return (
      <AppLayout>
        <Bullseye>Loading...</Bullseye>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem>
            <Button onClick={handleAddDepartament}>
              Добавить подразделение
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
      <DepartamentsTable items={items} />
    </AppLayout>
  );
});

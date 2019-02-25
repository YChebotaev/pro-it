import React from "react";
import { Table, TableHeader, TableBody } from "@patternfly/react-table";
import { withRouter } from "react-router";

export const DepartamentsTable = withRouter(({ history, items }) => {
  const cells = [
    {
      title: "Подразделение"
    }
  ];
  const rows = items.map(item => [item.name]);
  const actions = [
    {
      title: "Редактировать",
      onClick: (event, rowId) => {
        const item = items[rowId];
        history.push(`/departaments/${item.id}/edit`);
        event.preventDefault();
      }
    }
  ];

  return (
    <Table caption="Подразделения" cells={cells} rows={rows} actions={actions}>
      <TableHeader />
      <TableBody />
    </Table>
  );
});

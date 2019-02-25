import React from "react";
import { Table, TableHeader, TableBody } from "@patternfly/react-table";
import { withRouter } from "react-router";

export const ServicesTable = withRouter(({ history, items }) => {
  const cells = [
    {
      title: "Услуга"
    },
    {
      title: "Подразделение"
    }
  ];
  const rows = items.map(item => {
    return [item.name, item.departament.name];
  });
  const actions = [
    {
      title: "Редактировать",
      onClick: (event, rowId) => {
        const item = items[rowId];
        history.push(`/services/${item.id}/edit`);
        event.preventDefault();
      }
    }
  ];

  return (
    <Table caption="Услуги" cells={cells} rows={rows} actions={actions}>
      <TableHeader />
      <TableBody />
    </Table>
  );
});

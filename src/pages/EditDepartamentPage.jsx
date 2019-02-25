import React from "react";
import { useDepartament } from "../hooks/useDepartament";
import { withRouter } from "react-router";
import { AppLayout } from "../layouts/AppLayout";
import { Bullseye } from "@patternfly/react-core";
import { DepartamentEditForm } from "../forms/DepartamentEditForm";

export const EditDepartamentPage = withRouter(({ match: { params } }) => {
  const { data, update, loading } = useDepartament(params.departamentId);

  if (loading) {
    return (
      <AppLayout>
        <Bullseye>Loading...</Bullseye>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <DepartamentEditForm data={data} onSave={update} />
    </AppLayout>
  );
});

import React from "react";
import { useDepartament } from "../hooks/useDepartament";
import { withRouter } from "react-router";
import { AppLayout } from "../layouts/AppLayout";
import { DepartamentEditForm } from "../forms/DepartamentEditForm";

export const AddDepartamentPage = withRouter(({ history }) => {
  const { create } = useDepartament();

  const handleSave = async data => {
    const departament = await create(data);
    history.replaceState(`/departaments/${departament.id}/edit`);
  };

  return (
    <AppLayout>
      <DepartamentEditForm onSave={handleSave} />
    </AppLayout>
  );
});

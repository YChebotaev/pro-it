import React from "react";
import { useService } from "../hooks/useService";
import { AppLayout } from "../layouts/AppLayout";
import { ServiceEditForm } from "../forms/ServiceEditForm";
import { withRouter } from "react-router";

export const AddServicePage = withRouter(({ history }) => {
  const { create } = useService();

  const handleSave = async data => {
    const service = await create(data);
    history.replace(`/services/${service.id}/edit`);
  };

  return (
    <AppLayout>
      <ServiceEditForm onSave={handleSave} />
    </AppLayout>
  );
});

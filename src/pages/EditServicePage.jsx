import React from "react";
import { useService } from "../hooks/useService";
import { withRouter } from "react-router";
import { AppLayout } from "../layouts/AppLayout";
import { Bullseye } from "@patternfly/react-core";
import { ServiceEditForm } from "../forms/ServiceEditForm";
import { ShowError } from "../components/ShowError";

export const EditServicePage = withRouter(({ match: { params } }) => {
  const { data, update, loading, error } = useService(params.serviceId);

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
      <ServiceEditForm data={data} onSave={update} />
    </AppLayout>
  );
});

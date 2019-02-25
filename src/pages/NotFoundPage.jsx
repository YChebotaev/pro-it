import React from "react";
import { AppLayout } from "../layouts/AppLayout";
import { Bullseye } from "@patternfly/react-core";

export const NotFoundPage = () => {
  return (
    <AppLayout>
      <Bullseye>Страница не найдена</Bullseye>
    </AppLayout>
  );
};

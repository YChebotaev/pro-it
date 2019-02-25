import React from "react";
import { Alert } from "@patternfly/react-core";

export const ShowError = ({ error }) => {
  if (error) {
    if (error.stack) {
      return (
        <Alert variant="danger" title={error.message}>
          {error.stack}
        </Alert>
      );
    }
  } else {
    return null;
  }
};

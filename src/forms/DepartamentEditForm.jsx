import React, { useState } from "react";
import {
  FormGroup,
  TextInput,
  Form,
  Toolbar,
  ToolbarGroup,
  Button,
  ActionGroup
} from "@patternfly/react-core";

export const DepartamentEditForm = ({ data, onSave }) => {
  const [name, setName] = useState(data ? data.name : "");
  const [pending, setPending] = useState(false);

  const handleSave = async event => {
    event.preventDefault();
    setPending(true);
    try {
      await onSave({
        id: data ? data.id : undefined,
        name
      });
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <Form isHorizontal onSubmit={handleSave}>
      <FormGroup
        label="Название"
        isRequired
        fieldId="name"
        helperText="Введите название подразделения"
      >
        <TextInput
          name="name"
          id="name"
          value={name}
          onChange={value => setName(value)}
          isDisabled={pending}
        />
      </FormGroup>
      <ActionGroup>
        <Toolbar>
          <ToolbarGroup>
            <Button type="submit" variant="primary" isDisabled={pending}>
              Сохранить изменения
            </Button>
          </ToolbarGroup>
        </Toolbar>
      </ActionGroup>
    </Form>
  );
};

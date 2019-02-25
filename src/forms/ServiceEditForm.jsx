import React, { useState } from "react";
import {
  FormGroup,
  TextInput,
  Form,
  FormSelectOption,
  FormSelect,
  Toolbar,
  ToolbarGroup,
  Button,
  ActionGroup,
  Bullseye
} from "@patternfly/react-core";
import { useDepartaments } from "../hooks/useDepartaments";
import { get, first } from "lodash";

export const ServiceEditForm = ({ data, onSave }) => {
  const { items: departaments, loading } = useDepartaments();
  const [name, setName] = useState(data ? data.name : "");
  const [departament, setDepartament] = useState(
    data ? data.departament.id : ""
  );
  const [pending, setPending] = useState(false);

  const renderDepartamentOption = departament => {
    return (
      <FormSelectOption
        key={departament.id}
        value={departament.id}
        label={departament.name}
      />
    );
  };

  const handleSave = async event => {
    event.preventDefault();
    setPending(true);
    try {
      await onSave({
        id: data ? data.id : undefined,
        name,
        departament: departament
          ? departament
          : get(first(departaments), "id", "")
      });
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  if (loading) {
    return <Bullseye>Loading...</Bullseye>;
  }

  return (
    <Form isHorizontal onSubmit={handleSave}>
      <FormGroup
        label="Название"
        isRequired
        fieldId="name"
        helperText="Введите название услуги"
      >
        <TextInput
          name="name"
          id="name"
          value={name}
          onChange={value => setName(value)}
          isDisabled={pending}
        />
      </FormGroup>
      <FormGroup
        label="Подразделение"
        isRequired
        fieldId="departament"
        helperText="Выберите подразделение"
      >
        <FormSelect
          value={departament}
          onChange={value => setDepartament(value)}
          id="departament"
          name="departament"
          isDisabled={pending}
        >
          {departaments.map(renderDepartamentOption)}
        </FormSelect>
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

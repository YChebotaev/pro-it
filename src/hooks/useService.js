// import { useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_SERVICE = gql`
  query($id: ID) {
    service(where: { id: $id }) {
      id
      name
      departament {
        id
        name
      }
    }
  }
`;

const UPDATE_SERVICE = gql`
  mutation($id: ID, $name: String, $departament: ID) {
    updateService(
      where: { id: $id }
      data: { name: $name, departament: { connect: { id: $departament } } }
    ) {
      id
      name
      departament {
        id
        name
      }
    }
  }
`;

const CREATE_SERVICE = gql`
  mutation($name: String) {
    createService(data: { name: $name }) {
      id
      name
      departament {
        id
        name
      }
    }
  }
`;

const CONNECT_DEPARTAMENT = gql`
  mutation($id: ID, $departament: ID) {
    updateService(
      where: { id: $id }
      data: { departament: { connect: { id: $departament } } }
    ) {
      id
      name
      departament {
        id
        name
      }
    }
  }
`;

export const useService = id => {
  const updateService = useMutation(UPDATE_SERVICE);
  const createService = useMutation(CREATE_SERVICE);
  const connectDepartament = useMutation(CONNECT_DEPARTAMENT);

  const { data, loading, error } = useQuery(GET_SERVICE, {
    variables: {
      id
    }
  });

  const update = async variables => {
    const { data } = await updateService({
      variables
    });
    return data.updateService;
  };

  const create = async variables => {
    const { data } = await createService({
      variables: {
        name: variables.name
      }
    });
    const { data: data2 } = await connectDepartament({
      variables: {
        id: data.createService.id,
        departament: variables.departament
      }
    });
    return data2.updateService;
  };

  return { data: data.service, loading, update, create, error };
};

// import { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_SERVICES = gql`
  query {
    services {
      id
      name
      departament {
        id
        name
      }
    }
  }
`;

export const useServices = () => {
  const { data, loading, error } = useQuery(GET_SERVICES);

  return {
    items: data.services,
    loading,
    error
  };
};

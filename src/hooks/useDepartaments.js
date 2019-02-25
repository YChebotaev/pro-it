// import { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_DEPARTAMENTS = gql`
  query {
    departaments {
      id
      name
    }
  }
`;

export const useDepartaments = () => {
  const { data, loading, error } = useQuery(GET_DEPARTAMENTS);

  return {
    items: data.departaments,
    loading,
    error
  };
};

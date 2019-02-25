// import { useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_DEPARTAMENT = gql`
  query($id: ID) {
    departament(where: { id: $id }) {
      id
      name
    }
  }
`;

const UPDATE_DEPARTAMENT = gql`
  mutation($id: ID, $name: String) {
    updateDepartament(where: { id: $id }, data: { name: $name }) {
      id
      name
    }
  }
`;

const CREATE_DEPARTAMENT = gql`
  mutation($name: String) {
    createDepartament(data: { name: $name }) {
      id
      name
    }
  }
`;

export const useDepartament = id => {
  const updateDepartament = useMutation(UPDATE_DEPARTAMENT);
  const createDepartament = useMutation(CREATE_DEPARTAMENT);
  const { data, loading, error } = useQuery(GET_DEPARTAMENT, {
    variables: { id }
  });

  const update = async variables => {
    const { data } = await updateDepartament({ variables });
    return data.updateDepartament;
  };
  const create = async variables => {
    const { data } = await createDepartament({ variables });
    return data.createDepartament;
  };

  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setData({
  //     id: "2e892af3-f7d8-42d2-bf09-7dd89a45cb61",
  //     name:
  //       "Администрация Александровского муниципального района Пермского края"
  //   });
  //   setLoading(false);
  // }, 2000 + Math.random() * 1000);

  // const update = data =>
  //   new Promise(resolve => {
  //     setTimeout(resolve, 1000, data);
  //   });

  // const create = data =>
  //   new Promise(resolve => {
  //     setTimeout(resolve, 1000, {
  //       id: "81ad2e19-35f9-4aec-8560-8176b9e7e3f9",
  //       name: data.name
  //     });
  //   });

  return {
    data: data.departament,
    loading,
    update,
    create,
    error
  };
};

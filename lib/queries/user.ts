import { gql } from 'graphql-request';

export const GetUserByEmail = gql`
  query getUserByEmail($email: String!) {
    user: nextUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

export const CreateNextUserByEmail = gql`
  mutation createNextUserByEmail($email: String!, $password: String!) {
    newUser: createNextUser(data: { email: $email, password: $password }) {
      id
    }
  }
`;

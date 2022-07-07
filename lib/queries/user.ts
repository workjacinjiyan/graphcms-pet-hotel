import { gql } from 'graphql-request';

export const GetUserByEmail = gql`
  query getUserByEmail($email: String!) {
    user: appUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

export const CreateAppUserByEmail = gql`
  mutation createAppUserByEmail($email: String!, $password: String!) {
    newUser: createAppUser(data: { email: $email, password: $password }) {
      id
    }
  }
`;

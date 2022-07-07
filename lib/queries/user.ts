import { gql } from 'graphql-request';

export const GetAllUsers = gql`
  query getAllUsers {
    allUsers: appUsers {
      id
      slug
      createdAt
      updatedAt
      firstName
      lastName
      userRole
      avatar {
        url
      }
    }
  }
`;

export const GetUserByEmail = gql`
  query getUserByEmail($email: String!) {
    user: appUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

export const GetUserBySlug = gql`
  query getUserBySlug($slug: String!) {
    userBySlug: appUser(where: { slug: $slug }) {
      id
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

import { GetStaticProps, NextPage } from 'next';
import client from '../../lib/client';
import { GetUserBySlug } from '../../lib/queries/user';
import { TUser } from '../../types/user';

interface IUserDetail {
  userBySlug: TUser;
}

const UserDetail = ({ userBySlug }: IUserDetail) => {
  return <div>{JSON.stringify(userBySlug)}</div>;
};

export default UserDetail;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { userBySlug } = await client.request(GetUserBySlug, {
    params,
  });

  console.log(userBySlug);

  return {
    props: {
      userBySlug,
    },
  };
};

import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import client from '../../lib/client';
import { GetUserBySlug } from '../../lib/queries/user';
import { TUser } from '../../types/user';

interface IUserDetail {
  user: TUser;
}

const UserDetail = ({ user }: IUserDetail) => {
  return <div>{JSON.stringify(user)}</div>;
};

export default UserDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;

  const data = await client.request(GetUserBySlug, {
    slug,
  });

  console.log(data);

  return {
    props: {
      user: data.user,
    },
  };
};

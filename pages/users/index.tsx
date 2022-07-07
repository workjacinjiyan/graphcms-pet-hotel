import { GetStaticProps } from 'next';
import React from 'react';
import { Avatar, Table } from 'antd';
import { GetAllUsers } from '../../lib/queries/user';
import client from '../../lib/client';
import { TUser } from '../../types/user';
import type { ColumnsType } from 'antd/lib/table';

interface IProps {
  allUsers: TUser[];
}

const columns: ColumnsType<TUser> = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'Slug',
    dataIndex: 'slug',
  },
  {
    title: 'Role',
    dataIndex: 'userRole',
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    render: (_, record) => <Avatar src={record?.avatar?.url} />,
  },
];

const UsersPage = ({ allUsers }: IProps) => {
  console.log(allUsers);

  return (
    <>
      {/* this from variable dataSource */}
      <Table rowKey="id" columns={columns} dataSource={allUsers} />
    </>
  );
};

export default UsersPage;

export const getStaticProps: GetStaticProps = async () => {
  const { allUsers } = await client.request(GetAllUsers);

  return {
    props: {
      allUsers,
    },
  };
};

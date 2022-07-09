import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Avatar, Form, Input, Space, Table } from 'antd';
import { GetAllUsers } from '../../lib/queries/user';
import client from '../../lib/client';
import { TUser } from '../../types/user';
import type { ColumnsType } from 'antd/lib/table';
import Link from 'next/link';

interface IProps {
  allUsers: TUser[];
}

type LayoutType = Parameters<typeof Form>[0]['layout'];

const columns: ColumnsType<TUser> = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    render: (_, user) => <Avatar src={user?.avatar?.url} />,
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'Role',
    dataIndex: 'userRole',
  },
  {
    render: (_, user) => (
      <Space size="middle">
        <Link href={`/user/${user.slug}`}>
          <a>View</a>
        </Link>
        <Link href={`/user/${user.slug}/edit`}>
          <a>Edit</a>
        </Link>
      </Space>
    ),
  },
];

const UserPage = ({ allUsers }: IProps) => {
  console.log(allUsers);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <>
      <Form
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Id" key={'id'}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Created at" key={'createdAt'}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Email" key={'email'}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Name" key={'name'}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Status" key={'status'}>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Role" key={'role'}>
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={allUsers}
        scroll={{ x: 'max-content' }}
      />
    </>
  );
};

export default UserPage;

export const getStaticProps: GetStaticProps = async () => {
  const { allUsers } = await client.request(GetAllUsers);

  return {
    props: {
      allUsers,
    },
  };
};

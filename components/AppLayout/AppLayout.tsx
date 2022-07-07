import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './AppLayout.module.css';

const { Header, Sider, Content } = Layout;

interface IAppLayout {
  children?: React.ReactNode;
}

const menuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: (
      <Link href={'/'}>
        <a>Home</a>
      </Link>
    ),
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: (
      <Link href={'/users'}>
        <a>Users</a>
      </Link>
    ),
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'Audit Logs',
  },
  {
    key: '4',
    icon: <UploadOutlined />,
    label: 'Settings',
  },
];

const AppLayout = ({ children }: IAppLayout) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles['logo']} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          className={styles['site-layout-background']}
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: styles.trigger,
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className={styles['site-layout-background']}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

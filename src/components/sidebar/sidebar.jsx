import React, { useState } from 'react';
import '../sidebar/sidebar.scss';
import {
  NotificationOutlined,
  ContainerOutlined,
  DesktopOutlined,
  WechatOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Leaderboard', '2', <DesktopOutlined />),
  getItem('Ground', '3', <ContainerOutlined />),
  getItem('chat','4',<WechatOutlined />),
  getItem('Notification','5',<NotificationOutlined />)
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: 278,
      }}
      className='menu-class'
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

export default Sidebar;

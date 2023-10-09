import React, { useState } from 'react';
import '../sidebar/sidebar.scss';
import {
  NotificationOutlined,
  ContainerOutlined,
  DesktopOutlined,
  WechatOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Button, Menu, Input, Space } from 'antd';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);


const items = [
 getItem('Home', '1', <HomeOutlined />),
  getItem('Leaderboard', '2', <DesktopOutlined />),
  getItem('Ground', '3', <ContainerOutlined />),
  getItem('chat', '4', <WechatOutlined />),
  getItem('Notification', '5', <NotificationOutlined />)
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
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <div className='search-bar-class'>
      <Search placeholder="search" onSearch={onSearch} className='search-bar' />
      </div>
      <Menu
        className='sidebar-menu'
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

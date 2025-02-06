import { Button, Layout, theme } from 'antd';
import React, { useState } from 'react';
import Logo from "./Logo";
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import {MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";


const { Header, Sider } = Layout;
export default function Navbbar() {
    const [darkTheme, setDarkTheme] = useState (true);
    const [collapsed, setCollapsed] = useState (false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const {
        token: {colorBgContainer},
    } = theme.useToken(); 

    return (
        <Layout className='flex rounded-full px-1 py-1'>
            <Sider  
                collapsed={collapsed}
                collapsible
                trigger={null}
                theme={darkTheme? 'dark' : 'light'} 
                className="sidebar rounded-full bg-white" 
            >
                <Logo />
                <MenuList darkTheme={darkTheme} />
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
            </Sider>
            <Layout>
                <Header className="bg-hex mt-5"style={{ padding: 0, background: colorBgContainer }}>
                    <Button 
                      type="text" 
                      className="toggle bg-hex"
                      onClick={() => setCollapsed(!collapsed)}
                      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    />
                </Header>
            </Layout>
        </Layout>
    );
}

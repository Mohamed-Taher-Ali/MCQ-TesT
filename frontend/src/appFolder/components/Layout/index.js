import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Layout, Menu, Typography } from 'antd';
import { useSelector } from "react-redux";
import "./index.css"


const
{ Header, Content, Footer } = Layout,
{ Title } = Typography;

const MyLayout = ({ children }) => {
  let user = useSelector(s=>s.user.user)
  
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              Welcome to MCQ-TesT ( <strong>{user.name}</strong> )
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>designed by Mohamed-Taher</Footer>
      </Layout>
    )
}

export default MyLayout;
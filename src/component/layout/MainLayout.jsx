import React, { useState } from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {
  SettingOutlined ,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Space,Avatar, Tooltip} from 'antd';
import { MoonOutlined } from "@ant-design/icons";
import logo from "../../assets/image/logo.jpg";
const {  Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('ផ្ទាំងព័ត៌មាន', '/', <PieChartOutlined />),
 
  getItem('គ្រប់គ្រងព័់់់់ត៌មានសិស្ស', '/studentInfo', <UserOutlined />, [
    getItem('ព័ត៌មានលម្អិត', '/detail'),
    getItem('ការចូលរៀនរបស់សិស្ស', '/class'),
    getItem('ថ្នាក់រៀន', '/grade'),
  ]),

 
  getItem('វត្តមាន', '/attendance', <TeamOutlined />, [
    getItem('បុគ្គលិក', '/teacher'), 
    getItem('សិស្ស', '/student')]),
  getItem('របាយការណ៍', '/report', <FileOutlined />),

   getItem("ការកំណត់", "setting", <SettingOutlined />, [
      getItem("Language", "/Language"),
      getItem("Currency", "/currency"),
    ]),
  
];
function MainLayout (){
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" 
        defaultSelectedKeys={['1']}
        mode="inline" 
        items={items} 
        onClick={(item)=> navigate(item.key)}/>
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0,
           background: colorBgContainer }} /> */}

           <div className="layout-header">
             <Space>
            <img src={logo} alt=""  className="layout-logo"/>
              <div >
              <div className="txt-branname">សាលាបឋមសិក្សា កន្ទុយវៃ</div>
              <div>ប្រព័ន្ធគ្រប់គ្រង់ព័ត៌មានសិស្ស</div>
              </div>
              </Space>
            <Space size={'large'}>
              <Tooltip title="របៀបប្រើប្រាស់"><InfoCircleOutlined style={{ fontSize: '18px', color: '#8c8c8c' }} /></Tooltip>
              <MoonOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
              <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#87d068' }} />
              </Space>
           </div>
           
           
        <Content style={{ margin: '0 16px' }}>
          
          
          <div
            style={{
              padding: 24,
              minHeight: 600,
              marginTop: 10,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
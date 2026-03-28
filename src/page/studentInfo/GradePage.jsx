import React from 'react';
import { Layout, Card, Row, Col, Typography, Select, Badge, Avatar, Button, Space } from 'antd';
import { UserOutlined, MoonOutlined, FileTextOutlined, SearchOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const ClassCard = ({ level, year, shift }) => (
  <Card 
    hoverable 
    style={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
    bodyStyle={{ padding: '20px' ,background:'rgb(249, 252, 217)'}}
  >
    <div style={{ marginBottom: '16px' }}>
      <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '4px' }}>
        កម្រិត : ថ្នាក់ទី {level}
      </div>
      <div style={{ color: '#666' }}>ឆ្នាំសិក្សា : {year}</div>
      <div style={{ color: '#666' }}>ពេលសិក្សា : {shift}</div>
    </div>
    
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '10px' }}>
      <Button icon={<FileTextOutlined />} style={{ border: 'none', background: '#69eee3' }} />
      <Button type="primary" icon={<SearchOutlined />} style={{ background: '#1890ff' }} />
    </div>
  </Card>
);

const GradePage = () => {
  const classes = [
    { level: '១', year: '2023-2025', shift: 'ព្រឹក' },
    { level: '២', year: '2023-2025', shift: 'ព្រឹក' },
    { level: '៣', year: '2023-2025', shift: 'ព្រឹក' },
    { level: '៤', year: '2023-2025', shift: 'ព្រឹក' },
    { level: '៥', year: '2023-2025', shift: 'ព្រឹក' },
    { level: '៦', year: '2023-2025', shift: 'ព្រឹក' },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#e6e5e5' }}>
      {/* Top Header */}
      <Header style={{ 
        background: '#f3f8f8', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '50px',
        borderBottom: '1px solid #313030'
      }}>
        <div>
          <Title level={4} style={{ margin: 0, color: '#1a1a1a' }}>គ្រប់គ្រងថ្នាក់រៀន</Title>
          <Text type="secondary">Classes Management System</Text>
        </div>
      </Header>

      <Content style={{ padding: '60 px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Filter Section */}
          <Card style={{ marginBottom: '10px', marginTop: '10px',borderRadius: '12px' }}>
            <Row justify="space-between" align="middle">
              <Col>
                <Space size="middle">
                  <Text strong>Filter by Class:</Text>
                  <Select defaultValue="all" style={{ width: 150 }}>
                    <Option value="all">All Classes</Option>
                    <Option value="1">Grade 1</Option>
                  </Select>
                </Space>
              </Col>
              <Col>
                <Space size="large">
                  <Badge status="success" text="Active" />
                  <Badge status="error" text="Inactive" />
                  <Badge status="warning" text="Suspended" />
                </Space>
              </Col>
            </Row>
          </Card>

          {/* Grid Section */}
          <div style={{ background: '#d3cdcd', padding: '30px', borderRadius: '12px' }}>
            <Row gutter={[24, 24]}>
              {classes.map((item, index) => (
                <Col xs={24} sm={12} md={8} lg={8} xl={8} key={index}>
                  <ClassCard {...item} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default GradePage;
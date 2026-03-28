import React, { useState } from 'react';
import { 
  Layout, Typography, Card, Row, Col, Select, 
  Input, Avatar, Space, Pagination, Button, Drawer, Descriptions, Divider, Tag 
} from 'antd';
import { 
  SearchOutlined, UserOutlined, MoonOutlined, 
  IdcardOutlined, MailOutlined, PhoneOutlined, HomeOutlined 
} from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const DetailPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // ទិន្នន័យគំរូ
  const students = Array.from({ length: 18 }).map((_, index) => ({
    id: `22070${index + 1}`,
    name: 'ដារ៉ា ដារ៉ូ',
    gender: index % 2 === 0 ? 'ប្រុស' : 'ស្រី',
    dob: '12-មករា-2008',
    phone: '012 345 678',
    address: 'ភ្នំពេញ, កម្ពុជា',
    image: `https://xsgames.co/randomusers/assets/avatars/${index % 2 === 0 ? 'male' : 'female'}/${index}.jpg`
  }));

  const showDrawer = (student) => {
    setSelectedStudent(student);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      <Header style={{ background: '#ffffff', padding: '0 40px', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>ផ្ទាំងគ្រប់គ្រងព័ត៌មានសិស្ស</Title>
          <Text type="secondary">Student Information Management</Text>
        </div>
      </Header>

      <Content style={{ padding: '30px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Filter Section */}
          <Card style={{ marginBottom: '30px', borderRadius: '15px' }}>
            <Row gutter={16} justify="center">
              <Col span={6}><Select placeholder="គ្រប់ភេទ" style={{ width: '100%' }} size="large" /></Col>
              <Col span={9}><Input prefix={<IdcardOutlined />} placeholder="ស្វែងរកតាមអត្តលេខ..." size="large" /></Col>
              <Col span={9}><Input prefix={<SearchOutlined />} placeholder="ស្វែងរកតាមឈ្មោះ..." size="large" /></Col>
            </Row>
          </Card>

          {/* Student Grid */}
          <Row gutter={[20, 20]}>
            {students.map((student, index) => (
              <Col xs={12} sm={8} md={6} lg={4} key={index}>
                <Card
                  hoverable
                  onClick={() => showDrawer(student)}
                  style={{ borderRadius: '12px', textAlign: 'center' }}
                  cover={
                    <div style={{ padding: '15px' }}>
                      <Avatar shape="square" size={100} src={student.image} style={{ borderRadius: '8px' }} />
                    </div>
                  }
                >
                  <Text strong style={{ display: 'block' }}>{student.name}</Text>
                  <Text type="secondary" style={{ fontSize: '12px' }}>ID: {student.id}</Text>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>

        {/* --- Drawer សម្រាប់បង្ហាញព័ត៌មានលម្អិត --- */}
        <Drawer
          title="ព័ត៌មានលម្អិតសិស្ស"
          placement="right"
          onClose={onClose}
          open={open}
          width={450}
        >
          {selectedStudent && (
            <div style={{ textAlign: 'center' }}>
              <Avatar size={120} src={selectedStudent.image} style={{ marginBottom: '15px', border: '4px solid #f0f2f5' }} />
              <Title level={4}>{selectedStudent.name}</Title>
              <Tag color="blue">{selectedStudent.id}</Tag>
              
              <Divider orientation="left">ព័ត៌មានទូទៅ</Divider>
              <Descriptions column={1} bordered size="small">
                <Descriptions.Item label="ភេទ">{selectedStudent.gender}</Descriptions.Item>
                <Descriptions.Item label="ថ្ងៃខែឆ្នាំកំណើត">{selectedStudent.dob}</Descriptions.Item>
              </Descriptions>

              <Divider orientation="left">ព័ត៌មានទំនាក់ទំនង</Divider>
              <Space direction="vertical" style={{ width: '100%', textAlign: 'left' }}>
                <Text><PhoneOutlined /> ទូរស័ព្ទ: {selectedStudent.phone}</Text>
                <Text><MailOutlined /> អ៊ីមែល: dara.dany@school.edu.kh</Text>
                <Text><HomeOutlined /> អាសយដ្ឋាន: {selectedStudent.address}</Text>
              </Space>

              <div style={{ marginTop: '30px' }}>
                <Button type="primary" block size="large">កែប្រែព័ត៌មាន</Button>
              </div>
            </div>
          )}
        </Drawer>
      </Content>
    </Layout>
  );
};

export default DetailPage;